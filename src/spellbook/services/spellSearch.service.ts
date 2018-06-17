import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { ApiClientService } from "../../shared/apiClient.service";
import { ISpell } from "types/spell";
import { SearchResults, Facet, SearchChip } from "types/searching";

@Injectable()
export class SpellSearchService
{
	constructor(
		private $dispatchService: ApiClientService) { }

	search(searchText: string, chips?: SearchChip[]): Observable<SearchResults<ISpell>>
	{
		console.log(`SpellSearchService.search("${searchText}", ${JSON.stringify(chips)})`);
		return this.$dispatchService.post("SpellBook/Search", { SearchText: searchText, Chips: chips });
	}
}

export enum MagicSchool
{
	Universal,
	Abjuration,
	Conjuration,
	Divination,
	Enchantment,
	Evocation,
	Illusion,
	Necromancy,
	Transmutation,
}

export enum MagicSubSchool
{
	Universal,
	None,
	Calling,
	Creation,
	Healing,
	Summoning,
	Teleportation,
	Scrying,
	Charm,
	Compulsion,
	Figment,
	Glamer,
	Pattern,
	Phantasm,
	Shadow,
	Polymorph
}

export enum MagicDescriptor
{
	Universal,
	Acid,
	Air,
	Chaotic,
	Cold,
	Darkness,
	Death,
	Earth,
	Electricity,
	Evil,
	Fear,
	Fire,
	Force,
	Good,
	LanguageDependent,
	Lawful,
	Light,
	MindAffecting,
	Sonic,
	Water
}

export enum ComponentType
{
	Verbal,
	Somatic,
	Material,
	Focus,
	DivineFocus
}
