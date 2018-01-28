import { Character } from "../../characterSheet.types";

import { Component, OnInit, Input, Output } from "@angular/core";

import { SecurityService } from "../../../security/security.service";
import { Utilities } from "../../../shared/utilities.functions";
import { AlignmentService, Alignment } from "../../../shared/alignment.service";

@Component({
	selector: "app-character-basics",
	templateUrl: "characterBasics.component.html",
	styleUrls: ["../../characterSheet.cards.scss", "characterBasics.component.scss"]
})
export class CharacterBasicsComponent implements OnInit
{
	@Input() character: Character;
	@Output() saveChanges: (character) => void;


	constructor(
		private $securityService: SecurityService,
		private $alignments: AlignmentService,
		private $utilities: Utilities)
	{ }

	ngOnInit()
	{ }

	get icon(): string
	{
		return "fireball";
	}

	get name(): string
	{
		return this.character.name;
	}

	get player(): string
	{
		return this.$securityService.current.displayName;
	}

	get race(): string
	{
		return this.character.race;
	}

	get deity(): string
	{
		return "";
	}

	setName(value: string): void
	{
		this.character.name = value;
	}
}
