import { Component } from "@angular/core";

import { SecurityService } from "../security/security.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent
{
	title = "!!! Character Sheet !!!";

	constructor(private $securityService: SecurityService) {
	}

	get isLoggedIn(): boolean {
		return this.$securityService.isLoggedIn();
	}

	get username(): string {
		return this.$securityService.current.username;
	}
}
