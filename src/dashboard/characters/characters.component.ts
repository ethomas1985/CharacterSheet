import { MicroCharacter } from "../dashboard.types";

import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { CharactersService } from "./characters.service";
import { Utilities } from "../../shared/utilities.functions";

@Component({
	selector: "app-characters",
	templateUrl: "./characters.component.html",
	styles: ["./characters.component.scss"],
})
export class CharactersComponent
{
	_items: MicroCharacter[] = [];

	constructor(
		private $charactersService: CharactersService,
		private $router: Router,
		private $utilities: Utilities)
	{
	}

	get characters(): MicroCharacter[]
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

	goTo(character: MicroCharacter)
	{
		this.$router.navigate(["character", character.id]);
	}
}
