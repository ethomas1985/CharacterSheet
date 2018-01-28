import { Component, OnInit, Input } from "@angular/core";

import { Character, AbilityScore } from "../characterSheet.types";

@Component({
	selector: "app-character-summary",
	templateUrl: "characterSummary.component.html",
	styleUrls: ["characterSummary.component.scss"]
})

export class CharacterSummaryComponent implements OnInit
{
	@Input() character: Character;

	constructor() { }

	ngOnInit() { }

	get abilityScores(): AbilityScore[]
	{
		return [
			this.character.strength,
			this.character.dexterity,
			this.character.constitution,
			this.character.intelligence,
			this.character.wisdom,
			this.character.charisma
		];
	}
}
