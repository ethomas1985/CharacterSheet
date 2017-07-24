import { Component } from "@angular/core";

import { CharactersService, Character } from "./characters.service";
import { Utilities } from "../../shared/utilities.functions";

@Component({
	selector: "app-characters",
	templateUrl: "./characters.component.html",
	styles: ["./characters.component.scss"],
})
export class CharactersComponent
{
	_items: Character[] = [];

	constructor(
		private $charactersService: CharactersService,
		private $utilities: Utilities)
	{
	}

	get characters(): Character[]
	{
		if (this.$utilities.IsUndefinedOrNullOrEmpty(this._items))
		{
			const self = this;
			this.$charactersService
				.getCharacters()
				.subscribe(x =>
				{
					self._items = x;
				});
		}
		return this._items;
	}
}
