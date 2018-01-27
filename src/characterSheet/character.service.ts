import { Character } from "./characterSheet.types";

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { GetMockJurkur } from "./mock.Jurkur";

@Injectable()
export class CharacterService
{
	constructor(
		private $http: Http)
	{ }

	get(id: string): Observable<Character>
	{
		console.log("CharacterService.get(" + id + "):");
		return Observable.create(x =>
		{
			let mockCharacter: Character;
			switch (id)
			{
				case "4":
				case "fb2df686-a3ec-4303-a11d-a90074197357":
					mockCharacter = GetMockJurkur();
					break;
				default:
					mockCharacter = <Character>{ id: id };
					break;
			}
			x.next(mockCharacter)
		});
	}
}
