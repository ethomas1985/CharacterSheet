import { Component, Input, OnInit } from "@angular/core";

import { AlignmentService, Alignment } from "../../../../shared/alignment.service";
import { Utilities } from "../../../../shared/utilities.functions";

@Component({
	selector: "app-alignment-input",
	templateUrl: "alignmentInput.component.html"
})

export class AlignmentInputComponent implements OnInit
{
	@Input() character: Character;

	constructor(
		private $alignments: AlignmentService,
		private $utilities: Utilities)
	{ }

	ngOnInit() { }

	get alignment(): Alignment
	{
		return this.$alignments.getList().find(x => x.value === this.character.alignment);
	}

	getSuggestedFunction(): (value: string) => Alignment[]
	{
		const self = this;
		return getSuggestedValues;

		function getSuggestedValues(value: string): Alignment[]
		{
			const list = self.$alignments.getList();
			if (self.$utilities.IsUndefinedOrNullOrEmpty(value))
			{
				return list;
			}

			const filteredList = list.filter(x => x.value.includes(value) || x.displayValue.includes(value));
			return filteredList;
		}
	}

	getDisplayValueFunction(): (value: Alignment) => string
	{
		const self = this;
		return getDisplayValue;

		function getDisplayValue(value: Alignment): string
		{
			if (self.$utilities.IsUndefinedOrNull(value))
			{
				return "";
			}

			const displayValue = value.displayValue;
			return displayValue;
		}
	}

	getValueFunction(): (value: Alignment) => string
	{
		const self = this;
		return getValue;

		function getValue(value: Alignment): string
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
		console.log("AlignmentInputComponent.set('" + JSON.stringify(value) + "')");
		const alignment = this.$alignments.getByValue(value);
		if (!this.$utilities.IsUndefinedOrNull(alignment))
		{
			this.character.alignment = alignment.value;
		}
	}
}
