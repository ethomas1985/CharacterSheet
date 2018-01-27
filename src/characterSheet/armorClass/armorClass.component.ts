import { Character, DefensiveScore } from "../characterSheet.types";

import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-armor-class",
	templateUrl: "armorClass.component.html",
	styleUrls: ["../characterSheet.cards.scss", "armorClass.component.scss"]
})
export class ArmorClassComponent implements OnInit
{
	@Input() character: Character;

	constructor() { }

	ngOnInit() { }

	get armorClass(): number
	{
		return this.character.armorClass.score;
	}

	get flatFooted(): number
	{
		return this.character.flatFooted.score;
	}

	get touch(): number
	{
		return this.character.touch.score;
	}

	get combatManeuverDefense(): number
	{
		return this.character.combatManeuverDefense.score;
	}
}
