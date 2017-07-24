import { Component, Input } from "@angular/core";

import { NineBoxService, Item } from "./nineBox.service";
import { SecurityService } from "../../security/security.service";
import { Utilities } from "../../shared/utilities.functions";


@Component({
	selector: "app-omni-bar",
	templateUrl: "./omniBar.component.html",
	styles: ["./omniBar.component.scss"]
})
export class OmniBarComponent
{
	@Input() title: string; // = "!!! Character Sheet !!!";
	_items: Item[] = [];

	constructor(
		private $securityService: SecurityService,
		private $nineBoxService: NineBoxService,
		private $utilities: Utilities)
	{
		const self = this;
	}

	get items(): Item[] {
		if (this.$utilities.IsUndefinedOrNullOrEmpty(this._items)) {
			const self = this;
			this.$nineBoxService
				.getItems()
				.subscribe(x =>
				{
					self._items = x;
				});
		}
		return this._items;
	}

	get isLoggedIn(): boolean
	{
		return this.$securityService.isLoggedIn();
	}

	get username(): string
	{
		return this.$securityService.current.username;
	}

	logout() {
		this.$securityService.Logout();
	}
}
