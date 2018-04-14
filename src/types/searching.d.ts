
declare interface ISearchResults<T>
{
	SearchText: string;
	Facets: IFacet[];
	Results: T[];
	Count: number;
}

declare interface IFacet
{
	Name: string;
	Buckets: IBucket[];
}

declare interface IBucket
{
	Value: string;
	Count: number;
	Selected: boolean;
}