import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ApiClientService {

	constructor(private http: Http) { }

	private get baseUrl(): string {
		return "/api";
	}

	post<TBody, TResult>(endpoint: string, body: TBody): Observable<TResult> {
		return this.http.post(`${this.baseUrl}/${endpoint}`, body)
			.map(x => x.json());
	}
}
