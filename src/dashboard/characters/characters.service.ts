import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

export interface Character
{
	icon: string;
	name: string;
	level: number;
	class: string;
}

@Injectable()
export class CharactersService
{
	_events: Character[];
	_eventsObservable: Observable<Character[]>;

	private static mockEvents(): Character[]
	{
		const items: Character[] = [
			{
				icon: "pocket-bow",
				name: "Sotally Tober",
				level: 8,
				class: "Ranger"
			},
			{
				icon: "fireball",
				name: "Tyrida",
				level: 2,
				class: "Sorceror"
			},
			{
				icon: "pope-crown",
				name: "Ygdor SteelBeard",
				level: 6,
				class: "Cleric"
			}
		];
		return items;
	}

	constructor(
		private http: Http)
	{
		const self = this;
		this._events = CharactersService.mockEvents();
		this._eventsObservable = Observable.create(observable =>
		{
			observable.next(self._events);
		});
	}

	getCharacters(): Observable<Character[]>
	{
		return this._eventsObservable;
	}

}
