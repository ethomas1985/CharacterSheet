import { Injectable } from "@angular/core";

interface Lengthy
{
	length: number;
}

@Injectable()
export class Utilities
{
	IsUndefinedOrNull<T>(value: T): boolean
	{
		return value === undefined || value === null;
	}
	IsUndefinedOrNullOrEmpty<T extends Lengthy>(value: T): boolean
	{
		return value === undefined || value === null || value.length < 1;
	}
}
