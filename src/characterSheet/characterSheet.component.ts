import { AbilityScore, Character } from "./characterSheet.types";

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import "rxjs/add/operator/switchMap";

import { CharacterService } from "./character.service";
import { Utilities } from "../shared/utilities.functions";

@Component({
	selector: "app-character-sheet",
	templateUrl: "characterSheet.component.html",
	styleUrls: ["characterSheet.component.scss"]
})

export class CharacterSheetComponent implements OnInit
{
	private _character: Character;
	private _id: string;
	constructor(
		private $activatedRoute: ActivatedRoute,
		private $router: Router,
		private $characterService: CharacterService,
		private $utilities: Utilities)
	{ }

	ngOnInit()
	{
		const self = this;
		this.$activatedRoute.paramMap
			.switchMap(params => params.get("id"))
			.subscribe(consumeValue);

		function consumeValue(idPart: string)
		{
			self._id =
				self.$utilities.IsUndefinedOrNull(self._id)
					? idPart
					: self._id.concat(idPart);
		}
	}

	get character(): Character
	{
		if (this.$utilities.IsUndefinedOrNull(this._character))
		{
			const self = this;
			this.$characterService
				.get(this._id)
				.subscribe(x => self._character = x);
		}
		return this._character;
	}
}
