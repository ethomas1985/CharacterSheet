import * as _ from "lodash";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";
import { Facet, Bucket } from "types/searching";

@Component({
	selector: "cs-facet",
	templateUrl: "facet.component.html",
	styleUrls: ["facet.component.scss"]
})

export class FacetComponent implements OnInit
{
	@Input() model: Facet;

	@Output() apply: EventEmitter<Facet> = new EventEmitter();

	_mutableFacet: Facet;
	_hasChanges: boolean;

	constructor() { }

	ngOnInit()
	{
		this._mutableFacet = _.cloneDeep(this.model);
		this._mutableFacet["copied"] = true;
	}

	get name(): string
	{
		return this._mutableFacet.Name;
	}

	get buckets(): Bucket[]
	{
		return this._mutableFacet.Buckets;
	}
	get hasChanges(): boolean
	{
		return this._hasChanges;
	}

	onSelected(bucket: Bucket): void
	{
		if (!bucket["copied"]) {
			throw new Error("Received local scoped object; not emitted value!");
		}
		const filtered = this._mutableFacet.Buckets.filter(x => x.Value === bucket.Value);
		if (filtered.length === 0)
		{
			console.warn("Bucket does not belong to these results;", bucket);
		} else if (filtered.length > 1)
		{
			console.warn(`Too many buckets! [${filtered.length}]`, bucket);
		}

		bucket.Selected = !bucket.Selected;

		console.log("selecting!", this._mutableFacet, bucket);
		const indexof = this._mutableFacet.Buckets.indexOf(filtered[0]);
		this._mutableFacet.Buckets[indexof] = bucket;

		this._hasChanges = true;
	}

	doApply(): void
	{
		// console.log("Applying!", this._mutableModel);
		this.apply.emit(this._mutableFacet);
	}

	doClear(): void
	{
		console.log("Clearing!");

		this._mutableFacet = _.cloneDeep(this.model);
		this._hasChanges = false;
	}
}
