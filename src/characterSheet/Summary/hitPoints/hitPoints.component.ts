import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-hit-points",
	templateUrl: "hitPoints.component.html",
	styleUrls: ["../../characterSheet.cards.scss", "hitPoints.component.scss"]
})

export class HitPointsComponent implements OnInit
{
	@Input() total: number;
	@Input() hitPoints: number;
	@Input() damage: number;
	_damageResistance: number;
	_nonLethal: number;
	_temporary: number;

	constructor() { }

	ngOnInit() { }

	@Input()
	get damageResistance(): number {
		return this._damageResistance || 0;
	}
	set damageResistance(value: number) {
		this._damageResistance = value;
	}

	@Input()
	get nonLethal(): number {
		return this._nonLethal || 0;
	}
	set nonLethal(value: number) {
		this._nonLethal = value;
	}

	@Input()
	get temporary(): number {
		return this._damageResistance || 0;
	}
	set temporary(value: number) {
		this._damageResistance = value;
	}
}
