import { AbilityScore } from "../characterSheet.types";

import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-ability-score",
	templateUrl: "abilityScore.component.html",
	styleUrls: ["abilityScore.component.scss"]
})

export class AbilityScoreComponent implements OnInit
{
	@Input() ability: AbilityScore;

	constructor() { }

	ngOnInit() { }

	get modifier(): string {
		const sign = this.ability.modifier > 0 ? "+" : "";
		return `${sign}${this.ability.modifier}`;
	}
}
