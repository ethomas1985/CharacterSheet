export class SecurityService
{
	private loggedIn = false;

	constructor()
	{

	}

	isLoggedIn(): boolean
	{
		return this.loggedIn;
	}

	Login(username: string, password: string): Promise<boolean>
	{
		this.loggedIn = true;
		const promise = new Promise(waitAndResolve);

		return promise;

		function waitAndResolve(resolve)
		{
			setTimeout(() => resolve(true), 200);
		}
	}

	Logout()
	{
		this.loggedIn = false;
	}
}
