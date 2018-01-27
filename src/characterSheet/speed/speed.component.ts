import { Character } from "../characterSheet.types";

import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
	selector: "app-character-speed",
	templateUrl: "speed.component.html",
	styleUrls: ["../characterSheet.cards.scss"]
})

export class SpeedComponent implements OnInit
{
	@Input() character: Character;
	@Output() saveChanges: (character) => void;

	constructor() { }

	ngOnInit() { }

	get baseSpeed(): number
	{
		const baseSpeed = this.character.baseSpeed;
		return baseSpeed ? baseSpeed : 0;
	}

	get speed(): number
	{
		const speed = this.character.speed;
		return speed ? speed : 0;
	}
}
