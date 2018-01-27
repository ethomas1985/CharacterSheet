import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Utilities } from "../utilities.functions";

type getSuggestedValuesFunction<T> = (value: string) => T[];
type getDisplayValueFunction<T> = (value: T) => string;
type getValueFunction<T> = (value: T) => string;

@Component({
	selector: "cs-type-ahead",
	templateUrl: "typeAhead.component.html",
	styleUrls: ["typeAhead.component.scss"]
})
export class TypeAheadComponent<T> implements OnInit
{
	private _displayModel: string;

	private _model: T;
	get model(): T
	{
		return this._model;
	}
	@Input() set model(v: T)
	{
		this._model = v;
		this.onModelChanged(this._model);
	}

	@Input() type: "text" | "number" = "text";
	@Input() label: string;
	@Input() getSuggestedValues: getSuggestedValuesFunction<T>;
	@Input() getDisplayValue: getDisplayValueFunction<T>;
	@Input() getValue: getValueFunction<T>;

	@Output() onLeave = new EventEmitter<string>();

	constructor(
		private $utilities: Utilities)
	{ }

	ngOnInit()
	{
		const self = this;

		bindToThis("getSuggestedValues", this.getSuggestedValues);
		bindToThis("getDisplayValue", this.getDisplayValue);
		bindToThis("getValue", this.getValue);

		function bindToThis(name: string, fn: Function)
		{
			if (self.$utilities.IsUndefinedOrNull(fn))
			{
				throw new Error("ngOnInit: Required function was not bound; " + name);
			}
			fn.bind(self);
		}
	}

	get displayModel(): string
	{
		if (this.$utilities.IsUndefinedOrNull(this._displayModel)) {
			this.onModelChanged(this.model);
		}
		return this._displayModel;
	}
	set displayModel(value: string)
	{
		this._displayModel = value;
		this.onLeave.emit(value);
	}

	get values(): T[]
	{
		if (this.$utilities.IsUndefinedOrNull(this.getSuggestedValues))
		{
			throw new Error("Required function was not bound; getSuggestedValues");
		}

		const filteredList = this.getSuggestedValues(this._displayModel);
		return filteredList;
	}

	onModelChanged(value: T): void
	{
		this._displayModel =
			this.$utilities.IsUndefinedOrNull(this.getDisplayValue)
				? null
				: this.toDisplayValue(value);
	}

	toDisplayValue(value: T): string
	{
		if (this.$utilities.IsUndefinedOrNull(this.getDisplayValue))
		{
			throw new Error("Required function was not bound; getDisplayValue");
		}

		return this.getDisplayValue(value);
	}

	toValue(option: T): string
	{
		if (this.$utilities.IsUndefinedOrNull(this.getValue))
		{
			throw new Error("Required function was not bound; getValue");
		}

		const value = this.getValue(option);
		return value;
	}
}
