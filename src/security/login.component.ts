import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { SecurityService } from "./security.service";

class LoginModel
{
	username: string;
	password: string;
	constructor(isMocking: boolean)
	{
		if (isMocking)
		{
			this.username = "user";
			this.password = "secret";
		}
	}
}

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent
{
	model = new LoginModel(true);
	submitted = false;

	constructor(
		private $securityService: SecurityService,
		private $router: Router)
	{ }

	onSubmit()
	{
		const self = this;

		this.$securityService
			.Login(this.model.username, this.model.password)
			.then(redirect, onError);

		function redirect()
		{
			self.$router
				.navigate(["dashboard"]);
		}

		function onError(error)
		{
			console.error("LoginComponent.onSubmit() :: " + error);
		}
	}
}
