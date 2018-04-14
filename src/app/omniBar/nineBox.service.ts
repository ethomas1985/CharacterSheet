import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

export interface Item
{
	icon: string;
	name: string;
	link: string[];
}

const getUrl = "/api/NineBox";

@Injectable()
export class NineBoxService
{
	_items: Item[];
	_itemsObservable: Observable<Item[]>;

	private static createItems(length: number): Item[]
	{
		const items: Item[] = [
			{
				icon: "dashboard",
				name: "Dashboard",
				link: ["/dashboard"]
			},
			{
				icon: "people",
				name: `Characters`,
				link: ["/characters"]
			},
			{
				icon: "book",
				name: `Spellbook`,
				link: ["/spellbook"]
			}
		];
		return items;
	}

	constructor(private $http: Http)
	{
		const self = this;
		this._items = NineBoxService.createItems(10);
		this._itemsObservable = Observable.create(observable => {
			observable.next(self._items);
		});
	}

	getItems(): Observable<Item[]>
	{
		return this._itemsObservable;
		// return this.$http.get(getUrl).map(x => JSON.parse(x.json()));
	}
}
