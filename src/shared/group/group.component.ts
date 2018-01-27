import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "cs-group",
	templateUrl: "group.component.html"
})

export class GroupComponent implements OnInit
{
	@Input() title: string;
	constructor() { }

	ngOnInit() { }
}
