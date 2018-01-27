import { Injectable } from "@angular/core";

import { Utilities } from "./utilities.functions";

export interface Race
{
	displayValue: string;
	value: string;
}

const dwarf: Race = { displayValue: "Dwarf", value: "dwarf" };
const elf: Race = { displayValue: "Elf", value: "elf" };
const gnome: Race = { displayValue: "Gnome", value: "gnome" };

const halfElf: Race = { displayValue: "Half-Elf", value: "halfElf" };
const halfling: Race = { displayValue: "Halfling", value: "halfling" };
const halfOrc: Race = { displayValue: "Half-Orc", value: "halfOrc" };

const human: Race = { displayValue: "Human", value: "human" };

@Injectable()
export class RaceService
{

	private _list: Race[];
	private _valueHash: { [key: string]: Race };
	private _displayHash: { [key: string]: Race } = {};

	constructor(
		private $utilities: Utilities)
	{
		const self = this;

		put(dwarf);
		put(elf);
		put(gnome);
		put(halfElf);
		put(halfling);
		put(halfOrc);
		put(human);

		function put(value: Race)
		{
			if (self.$utilities.IsUndefinedOrNull(self._list))
			{
				self._list = [];
			}
			self._list.push(value);

			if (self.$utilities.IsUndefinedOrNull(self._valueHash))
			{
				self._valueHash = {};
			}
			self._valueHash[value.value] = value;

			if (self.$utilities.IsUndefinedOrNull(self._displayHash))
			{
				self._displayHash = {};
			}
			self._displayHash[value.displayValue] = value;
		}
	}

	getList(): Race[]
	{
		return this._list.map(x => x);
	}

	getByValue(value: string): Race
	{
		return this._valueHash[value];
	}

	getByDisplayValue(displayValue: string): Race
	{
		return this._displayHash[displayValue];
	}
}
