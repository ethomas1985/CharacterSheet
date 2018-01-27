import { AbilityScore } from "../characterSheet.types";

import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-ability-scores",
	templateUrl: "abilityScores.component.html",
	styleUrls: ["../characterSheet.cards.scss", "abilityScores.component.scss"]
})

export class AbilityScoresComponent implements OnInit
{
	@Input() abilityScores: AbilityScore[];

	constructor() { }

	ngOnInit() { }
}
