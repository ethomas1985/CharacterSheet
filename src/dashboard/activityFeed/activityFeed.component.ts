import { Component } from "@angular/core";

import { ActivityFeedService, ActivityEvent } from "./activityFeed.service";
import { Utilities } from "../../shared/utilities.functions";

@Component({
	selector: "app-activity-feed",
	templateUrl: "./activityFeed.component.html",
})
export class ActivityFeedComponent
{
	_items: ActivityEvent[] = [];

	constructor(
		private $activityFeedService: ActivityFeedService,
		private $utilities: Utilities)
	{ }

	get activityFeed(): ActivityEvent[] {
		if (this.$utilities.IsUndefinedOrNullOrEmpty(this._items)) {
			const self = this;
			this.$activityFeedService
				.getRecentEvents()
				.subscribe(x =>
				{
					self._items = x;
				});
		}
		return this._items;
	}
}
