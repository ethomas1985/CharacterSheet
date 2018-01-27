import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "cs-field",
	templateUrl: "field.component.html",
	styleUrls: ["field.component.scss"]
})
export class FieldComponent implements OnInit
{
	@Input() label: string;
	@Input() model: string;

	constructor() { }

	ngOnInit() { }
}
