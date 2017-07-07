import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { SecurityService } from "./security.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	// styleUrls: ["./login.component.css"]
})
export class LoginComponent
{
	username: string;
	password: string;

	constructor(
		private $securityService: SecurityService,
		private $router: Router)
	{ }

	submit()
	{
		const self = this;

		this.$securityService
			.Login(this.username, this.password)
			.then(redirect, onError);

		function redirect() {
			self.$router.navigate(["/dashboard"]);
		}

		function onError(error) {
			console.error(error);
		}
	}
}
