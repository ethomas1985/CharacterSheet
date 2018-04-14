import { Component, OnInit, Input } from "@angular/core";
import { SpellSearchService, MagicSchool, MagicSubSchool } from "./spellSearch.service";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: "app-spell-book",
	templateUrl: "spellbook.component.html",
	styleUrls: ["spellbook.component.scss"]
})

export class SpellBookComponent implements OnInit
{
	@Input() characterId: string;

	private _searchText = "";
	private _results: ISpell[];
	private _facets: IFacet[];
	private _searchResults: ISearchResults<ISpell>;
	private _resultsCount: number;

	constructor(
		MatIconRegistry: MatIconRegistry,
		sanitizer: DomSanitizer,
		private $spellSearch: SpellSearchService)
	{
		MatIconRegistry.addSvgIcon("shield", sanitize("/assets/icons/sbed/originals/svg/000000/transparent/shield.svg"));
		MatIconRegistry.addSvgIcon("portal", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/portal.svg"));
		MatIconRegistry.addSvgIcon("crystal-ball", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/crystal-ball.svg"));
		MatIconRegistry.addSvgIcon("upgrade", sanitize("/assets/icons/delapouite/originals/svg/000000/transparent/upgrade.svg"));
		MatIconRegistry.addSvgIcon("screaming", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/screaming.svg"));
		MatIconRegistry.addSvgIcon("magic-swirl", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/magic-swirl.svg"));

		function sanitize(value)
		{
			return sanitizer.bypassSecurityTrustResourceUrl(value);
		}
	}

	ngOnInit()
	{
		this.search();
	}

	get searchText(): string
	{
		return this._searchText;
	}
	set searchText(v: string)
	{
		console.log(`Changing SpellBookComponent.searchText to '${v}'`);
		this._searchText = v;
	}

	get facets(): IFacet[]
	{
		return this._facets;
	}

	get results(): ISpell[]
	{
		return this._results;
	}
	get resultsCount(): number
	{
		return this._resultsCount;
	}

	private get searchResults(): ISearchResults<ISpell>
	{
		return this._searchResults;
	}
	private set searchResults(v: ISearchResults<ISpell>)
	{
		this._searchResults = v;
		this._results = v ? v.Results : null;
		this._facets = v ? v.Facets : null;
		this._resultsCount = v ? v.Count : 0;
	}

	search(): void
	{
		const self = this;

		this.$spellSearch.search(this.searchText, this.facets)
			.subscribe(x =>
			{
				console.log("Search Returned:", x);
				self.searchResults = x;
			});
	}

	getIcon(magicSchool: MagicSchool): string
	{
		switch (magicSchool)
		{
			case MagicSchool.Abjuration:
				return "shield";
			case MagicSchool.Conjuration:
				return "portal";
			case MagicSchool.Divination:
				return "crystal-ball";
			case MagicSchool.Enchantment:
				return "upgrade";
			case MagicSchool.Evocation:
				return "screaming";
			case MagicSchool.Illusion:
				return "";
			case MagicSchool.Necromancy:
				return "";
			case MagicSchool.Transmutation:
				return "";
			case MagicSchool.Universal:
			default:
				return "magic-swirl";
		}
	}

	getSchool(school: MagicSchool): string
	{
		return MagicSchool[school];
	}

	getSubSchool(subSchool: MagicSubSchool): string
	{
		return MagicSubSchool[subSchool];
	}

	applyFacet($facet: IFacet): void
	{
		if (!$facet["copied"]) {
			throw new Error("Received local scoped object; not emitted value!");
		}

		console.log("Facet requested Apply!", $facet);

		const filtered = this.facets.filter(x => x.Name === $facet.Name);
		if (filtered.length === 0)
		{
			console.warn("Facet does not belong to these results;", $facet);
		} else if (filtered.length > 1)
		{
			console.warn(`Too many facets! [${filtered.length}]`, $facet);
		}

		const indexof = this.facets.indexOf(filtered[0]);
		this.facets[indexof] = $facet;

		this.search();
	}
}
