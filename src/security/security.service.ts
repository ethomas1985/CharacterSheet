import { Injectable } from "@angular/core";
import { propertyNames } from "@angular/language-service/src/html_info";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { Utilities } from "../shared/utilities.functions";

export interface User
{
	username: string;
	displayName: string;
}

const logoutOutUser = {
	username: "LOGGED OUT",
	displayName: "LOGGED OUT"
};

enum StorageKeys
{
	Token,
	CurrentUser
}

const testingToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.\
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";

@Injectable()
export class SecurityService implements CanActivate
{
	constructor(private $router: Router, private $utilities: Utilities)
	{

	}

	private get Token(): string
	{
		return localStorage.getItem(StorageKeys[StorageKeys.Token]);
	}
	private set Token(value: string)
	{
		localStorage.setItem(StorageKeys[StorageKeys.Token], value);
	}

	public get current(): User
	{
		if (!this.isLoggedIn) {
			return logoutOutUser;
		}
		const user: User = JSON.parse(localStorage.getItem(StorageKeys[StorageKeys.CurrentUser]));
		return user;
	}

	public set current(value: User)
	{
		localStorage.setItem(StorageKeys[StorageKeys.CurrentUser], JSON.stringify(value));
	}

	isLoggedIn(): boolean
	{
		return !this.$utilities.IsUndefinedOrNull(this.Token);
	}
	/*
	localStorage.set('key', 'value');
	localStorage.get(StorageKeys.Token);
	 */
	Login(username: string, password: string): Promise<boolean>
	{
		this.Token = testingToken;
		this.current = { username: username, displayName: undefined };
		const promise = new Promise<boolean>(waitAndResolve);

		return promise;

		function waitAndResolve(resolve)
		{
			setTimeout(() => resolve(true), 200);
		}
	}

	Logout()
	{
		this.Token = null;
		this.$router.navigate(["login"]);
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
	{
		console.debug(
			"SecurityService.canActivate := " + this.isLoggedIn()
			+ " | route : " + JSON.stringify(route.url)
			+ " | state : " + JSON.stringify(state.url));

		if (!this.isLoggedIn())
		{
			this.$router.navigate(["login"], { queryParams: { returnUrl: state.url } });
			return false;
		}

		return true;
	}
}
