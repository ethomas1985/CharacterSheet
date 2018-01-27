import { Injectable } from "@angular/core";

import { Utilities } from "./utilities.functions";

export interface Alignment
{
	key: string;
	displayValue: string;
	value: string;
}

const lawfulGood: Alignment = { key: "LG", displayValue: "Lawful Good", value: "lawfulGood" };
const neutralGood: Alignment = { key: "NG", displayValue: "Neutral Good", value: "neutralGood" };
const chaoticGood: Alignment = { key: "CG", displayValue: "Chaotic Good", value: "chaoticGood" };

const lawfulNeutral: Alignment = { key: "LN", displayValue: "Lawful Neutral", value: "lawfulNeutral" };
const neutral: Alignment = { key: "N", displayValue: "Neutral", value: "neutral" };
const chaoticNeutral: Alignment = { key: "CN", displayValue: "Chaotic Neutral", value: "chaoticNeutral" };

const lawfulEvil: Alignment = { key: "LE", displayValue: "Lawful Evil", value: "lawfulEvil" };
const neutralEvil: Alignment = { key: "NE", displayValue: "Neutral Evil", value: "neutralEvil" };
const chaoticEvil: Alignment = { key: "CE", displayValue: "Chaotic Evil", value: "chaoticEvil" };

@Injectable()
export class AlignmentService
{

	private _list: Alignment[];
	private _keyHash: { [key: string]: Alignment };
	private _valueHash: { [key: string]: Alignment };
	private _displayHash: { [key: string]: Alignment } = {};

	constructor(
		private $utilities: Utilities)
	{
		const self = this;

		put(lawfulGood);
		put(neutralGood);
		put(chaoticGood);
		put(lawfulNeutral);
		put(neutral);
		put(chaoticNeutral);
		put(lawfulEvil);
		put(neutralEvil);
		put(chaoticEvil);

		function put(value: Alignment)
		{
			if (self.$utilities.IsUndefinedOrNull(self._list))
			{
				self._list = [];
			}
			self._list.push(value);

			if (self.$utilities.IsUndefinedOrNull(self._keyHash))
			{
				self._keyHash = {};
			}
			self._keyHash[value.key] = value;

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

	getList(): Alignment[]
	{
		return this._list.map(x => x);
	}

	getByKey(key: string): Alignment
	{
		return this._keyHash[key];
	}

	getByValue(value: string): Alignment
	{
		return this._valueHash[value];
	}

	getByDisplayValue(displayValue: string): Alignment
	{
		return this._displayHash[displayValue];
	}
}
