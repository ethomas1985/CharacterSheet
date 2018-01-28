import { Component, Input, OnInit } from "@angular/core";

import { Character } from "../../../characterSheet.types";
import { RaceService, Race } from "../../../../shared/race.service";
import { Utilities } from "../../../../shared/utilities.functions";

@Component({
	selector: "app-race-input",
	templateUrl: "raceInput.component.html"
})

export class RaceInputComponent implements OnInit
{
	@Input() character: Character;

	constructor(
		private $races: RaceService,
		private $utilities: Utilities)
	{ }

	ngOnInit() { }

	get race(): Race
	{
		return this.$races.getList().find(x => x.displayValue === this.character.race);
	}

	getSuggestedFunction(): (value: string) => Race[]
	{
		const self = this;
		return getSuggestedValues;

		function getSuggestedValues(value: string): Race[]
		{
			const list = self.$races.getList();
			if (self.$utilities.IsUndefinedOrNullOrEmpty(value))
			{
				return list;
			}

			const filteredList = list.filter(x => x.value.includes(value) || x.displayValue.includes(value));
			return filteredList;
		}
	}

	getDisplayValueFunction(): (value: Race) => string
	{
		const self = this;
		return getDisplayValue;

		function getDisplayValue(value: Race): string
		{
			if (self.$utilities.IsUndefinedOrNull(value))
			{
				return "";
			}

			const displayValue = value.displayValue;
			return displayValue;
		}
	}

	getValueFunction(): (value: Race) => string
	{
		const self = this;
		return getValue;

		function getValue(value: Race): string
		{
			if (self.$utilities.IsUndefinedOrNull(value))
			{
				return "";
			}

			const displayValue = value.value;
			return displayValue;
		}
	}

	set(value: string)
	{
		console.log("RaceInputComponent.set('" + JSON.stringify(value) + "')");
		const obj = this.$races.getByValue(value);
		if (!this.$utilities.IsUndefinedOrNull(obj))
		{
			this.character.race = obj.value;
		}
	}
}
