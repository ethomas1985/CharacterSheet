import { SavingThrow } from "../../characterSheet.types";

import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-saving-throws",
	templateUrl: "savingThrows.component.html",
	styleUrls: ["../../characterSheet.cards.scss", "savingThrows.component.scss"]
})

export class SavingThrowsComponent implements OnInit
{
	@Input() fortitude: SavingThrow;
	@Input() reflex: SavingThrow;
	@Input() will: SavingThrow;

	constructor() { }

	ngOnInit() { }

	get fortitudeScore(): number { return this.fortitude.score; }

	get reflexScore(): number { return this.reflex.score; }

	get willScore(): number { return this.will.score; }
}
