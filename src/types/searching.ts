
export class SearchResults<T>
{
	SearchText: string;
	Facets: Facet[];
	Results: T[];
	Count: number;
}

export class Facet
{
	Id: string;
	Name: string;
	Buckets: Bucket[];
}

export class Bucket
{
	Value: string;
	Count: number;
	Selected: boolean;
}

export class SearchChip
{
	constructor(
		public Name: string,
		public Value: string) { }
}
