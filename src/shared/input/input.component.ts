import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "cs-input",
	templateUrl: "input.component.html",
	styleUrls: ["input.component.scss"]
})
export class InputComponent implements OnInit
{
	private _model: string;
	private _value: string;

	@Input() type: "text" | "number" | "password" = "text";
	@Input() label: string;

	get model(): string { return this._model; }
	@Input() set model(value: string)
	{
		this._model = value;
		this.onModelChanged(this._model);
	}

	@Output() onLeave = new EventEmitter<string>();

	constructor() { }

	ngOnInit() { }

	public get value(): string
	{
		return this._value;
	}
	public set value(v: string)
	{
		this._value = v;
		this.onLeave.emit(this._value);
	}

	private onModelChanged(value: string): void
	{
		this.value = value;
	}

}
