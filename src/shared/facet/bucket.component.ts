import _ = require("lodash");
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";

@Component({
	selector: "cs-bucket",
	templateUrl: "bucket.component.html",
	styleUrls: ["bucket.component.scss"]
})

export class BucketComponent implements OnInit
{
	@Input() model: IBucket;
	@Output() select: EventEmitter<IBucket> = new EventEmitter();


	_mutableBucket: IBucket;

	constructor() { }

	ngOnInit()
	{
		this._mutableBucket = _.cloneDeep(this.model);
		this._mutableBucket["copied"] = true;
	}

	get selected(): boolean
	{
		return this._mutableBucket.Selected;
	}

	get value(): string
	{
		return this._mutableBucket.Value;
	}

	get count(): number
	{
		return this._mutableBucket.Count;
	}


	toggle($event): void
	{
		console.log("toggling!", this._mutableBucket);

		this.select.emit(this._mutableBucket);
	}
}
