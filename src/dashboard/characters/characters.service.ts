import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { MicroCharacter } from "../dashboard.types";

@Injectable()
export class CharactersService
{
	_events: MicroCharacter[];
	_eventsObservable: Observable<MicroCharacter[]>;

	private static mockEvents(): MicroCharacter[]
	{
		const items: MicroCharacter[] = [
			{
				id: "1",
				icon: "pocket-bow",
				name: "Sotally Tober",
				level: 8,
				class: "Ranger"
			},
			{
				id: "2",
				icon: "fireball",
				name: "Tyrida",
				level: 2,
				class: "Sorcerer"
			},
			{
				id: "3",
				icon: "pope-crown",
				name: "Ygdor SteelBeard",
				level: 6,
				class: "Cleric"
			},
			{
				id: "fb2df686-a3ec-4303-a11d-a90074197357",
				icon: "fireball",
				name: "Jorkur",
				level: 4,
				class: "Sorcerer"
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

	getCharacters(): Observable<MicroCharacter[]>
	{
		return this._eventsObservable;
	}

}
