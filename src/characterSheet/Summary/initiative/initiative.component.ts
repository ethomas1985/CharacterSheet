import { Character } from "../../characterSheet.types";

import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
	selector: "app-character-initiative",
	templateUrl: "initiative.component.html",
	styleUrls: ["../../characterSheet.cards.scss", "initiative.component.scss"]
})
export class InitiativeComponent implements OnInit
{
	@Input() character: Character;
	@Output() saveChanges: (character) => void;

	constructor() { }

	ngOnInit() { }

	get dexterity(): number
	{
		const dex = this.character.dexterity;
		return dex ? dex.modifier : 0;
	}

	get feat(): number
	{
		return 0;
	}

	get racial(): number
	{
		return 0;
	}

	get miscellaneous(): number
	{
		return 0;
	}

	get initiative(): number
	{
		const fields = [
			this.dexterity,
			this.feat,
			this.racial,
			this.miscellaneous
		];
		const initiative = fields.reduce((p, c) => p + c, 0);
		return initiative;
	}
}
