import { Component, OnInit, Input } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { SpellSearchService, MagicSchool, MagicSubSchool } from "../../services/spellSearch.service";
import { ISpell } from "types/spell";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Utilities } from "../../../shared/utilities.functions";
import { Facet, SearchChip, SearchResults, Bucket } from "types/searching";


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
	private _facets: Facet[];
	private _chips: SearchChip[];
	private _searchResults: SearchResults<ISpell>;
	private _resultsCount: number;

	constructor(
		MatIconRegistry: MatIconRegistry,
		sanitizer: DomSanitizer,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private $spellSearch: SpellSearchService,
		private $utilities: Utilities)
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
		this.activatedRoute.queryParams.subscribe((params: Params) =>
		{
			const searchTextParam: string = params["searchText"];
			if (!this.$utilities.IsUndefinedOrNullOrEmpty(searchTextParam))
			{
				console.log(`SearchText detected in queryString: ${searchTextParam}`);
				this.searchText = searchTextParam;
			}

			const facetParams: string = params["facets"];
			if (this.$utilities.IsUndefinedOrNull(this._facets)
				&& !this.$utilities.IsUndefinedOrNullOrEmpty(facetParams))
			{
				console.log(`Facets detected in queryString: ${facetParams}`);
				this.chips = facetParams.split(";")
					.map(convertToSearchChip);
			}
		});

		this.search();

		function convertToSearchChip(value: string): SearchChip
		{
			const bits = value.split(":");
			console.log(`    "${value}" => ${JSON.stringify(bits)}`);

			return new SearchChip(bits[0], bits[1]);
		}
	}

	get canClear(): boolean
	{
		return (this.searchText && this.searchText.length > 0)
			|| (this.chips && this.chips.length > 0)
	}

	get searchText(): string
	{
		return this._searchText;
	}
	set searchText(v: string)
	{
		this._searchText = v;

		this.updateQueryParameters();
	}

	get facets(): Facet[]
	{
		return this._facets;
	}

	get chips(): SearchChip[]
	{
		return this._chips;
	}
	set chips(value: SearchChip[]) {
		console.log(`SETTING CHIPS => ${JSON.stringify(value)}`);

		this._chips = value;
	}

	get results(): ISpell[]
	{
		return this._results;
	}

	get resultsCount(): number
	{
		return this._resultsCount;
	}

	private get searchResults(): SearchResults<ISpell>
	{
		return this._searchResults;
	}

	private set searchResults(v: SearchResults<ISpell>)
	{
		console.debug("searchResults: ", v)
		this._searchResults = v;
		this._results = v ? v.Results : null;
		this._facets = v ? v.Facets : null;
		this.chips = this._facets.reduce(SpellBookComponent.convertFacetsToChips, [])
		this._resultsCount = v ? v.Count : 0;
	}

	private static convertFacetsToChips(chips: SearchChip[], facet: Facet): SearchChip[]
	{
		return chips.concat(facet.Buckets.filter(x => x.Selected).map(x => new SearchChip(facet.Name, x.Value)));
	}

	updateQueryParameters()
	{
		const queryParameters = {};

		if (!this.$utilities.IsUndefinedOrNullOrEmpty(this.searchText))
		{
			queryParameters["searchText"] = this.searchText;
		}

		this.chips = this.facets && this.facets.reduce(SpellBookComponent.convertFacetsToChips, []);
		const searchChips = this.chips.map(x => `${x.Name}:${x.Value}`);
		if (!this.$utilities.IsUndefinedOrNullOrEmpty(searchChips))
		{
			queryParameters["facets"] = searchChips.join(";");
		}

		this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParameters });
	}

	search(): void
	{
		const self = this;

		const newChips = this._facets ? this._facets.reduce(SpellBookComponent.convertFacetsToChips, []) : [];
		this.$spellSearch.search(this.searchText, newChips)
			.subscribe(x =>
			{
				console.log("Search Returned:", x);
				self.searchResults = x;
			});
	}

	clear()
	{
		const self = this;
		this.searchText = null;
		this.chips = [];
		this._facets.forEach(f => f.Buckets.forEach(b => b.Selected = false));

		this.updateQueryParameters();
		this.search();
	}

	clearSearchChip(searchChip: SearchChip)
	{
		this.chips = this.chips.filter(c => c.Name !== searchChip.Name && c.Value !== searchChip.Value);
		const facets = this.facets.filter(f => f.Name === searchChip.Name);
		if (facets || facets.length === 1)
		{
			const buckets = facets[0].Buckets.filter(bucket => bucket.Value === searchChip.Value);
			if (buckets || buckets.length === 1)
			{
				buckets[0].Selected = false;
			}
		}

		this.updateQueryParameters();
		this.search();
	}

	applyFacet($facet: Facet): void
	{
		if (!$facet["copied"])
		{
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

		this.updateQueryParameters();

		this.search();
	}
}
