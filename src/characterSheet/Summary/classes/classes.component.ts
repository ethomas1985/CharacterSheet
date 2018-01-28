import { CharacterClass } from "../../characterSheet.types";

import { Component, OnInit, Input } from "@angular/core";
import { CharacterService } from "../../character.service";

@Component({
	selector: "app-character-classes",
	templateUrl: "classes.component.html",
	styleUrls: ["../../characterSheet.cards.scss", "classes.component.scss"]
})

export class ClassesComponent implements OnInit
{
	@Input() classes: CharacterClass[];

	constructor() { }

	ngOnInit() { }
}
