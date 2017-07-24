import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

export interface ActivityEvent
{
	icon: string;
	text: string;
}

@Injectable()
export class ActivityFeedService
{
	_events: ActivityEvent[];
	_eventsObservable: Observable<ActivityEvent[]>;

	private static mockEvents(): ActivityEvent[]
	{
		const items: ActivityEvent[] = [
			{
				icon: "dashboard",
				text: "Sotally Tober did some cool shit."
			},
			{
				icon: "people",
				text: "Tyrida died, again..."
			},
			{
				icon: "book",
				text: "Ygdor SteelBeard ran away!!!"
			}
		];
		return items;
	}

	constructor(private http: Http)
	{
		const self = this;
		this._events = ActivityFeedService.mockEvents();
		this._eventsObservable = Observable.create(observable =>
		{
			observable.next(self._events);
		});
	}

	getRecentEvents(): Observable<ActivityEvent[]>
	{
		return this._eventsObservable;
	}

}
