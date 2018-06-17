import { Component, OnInit, Input } from "@angular/core";

import { MagicSchool, MagicSubSchool, ComponentType } from "../../services/spellSearch.service";
import { ISpell, MagicDescriptor, ISpellComponent } from "types/spell";

@Component({
	selector: "app-spell",
	templateUrl: "spellCard.component.html",
	styleUrls: ["spellCard.component.scss"]
})

export class SpellCardComponent implements OnInit
{
	private _classLevels: { className: string, level: number }[];

	@Input() spell: ISpell;

	constructor() { }

	ngOnInit()
	{
		const self = this;
		this._classLevels = Object.keys(this.levelRequirements).map(toString);

		function toString(className: string): { className: string, level: number }
		{
			const level = self.levelRequirements[className];
			return {
				className: className,
				level: level
			};
		}
	}

	get name(): string
	{
		return this.spell.Name;
	}

	get school(): string
	{
		return this.spell.School;
	}

	get subSchools(): string
	{
		return this.spell.SubSchools.join(", ");
	}

	get schoolText(): string
	{
		return this.subSchools ? `${this.school} (${this.subSchools})` : this.school;
	}

	get magicDescriptors(): string
	{
		if (this.spell.MagicDescriptors
			&& this.spell.MagicDescriptors.length > 0)
		{
			return `[${this.spell.MagicDescriptors.join(", ")}]`;
		}
		return "";
	}

	get savingThrow(): string
	{
		return this.spell.SavingThrow;
	}

	get description(): string
	{
		return this.spell.Description;
	}

	get hasSpellResistance(): boolean
	{
		return this.spell.HasSpellResistance;
	}

	get spellResistance(): string
	{
		return this.spell.SpellResistance;
	}

	get castingTime(): string
	{
		return this.spell.CastingTime;
	}

	get range(): string
	{
		return this.spell.Range;
	}

	get levelRequirements(): { [key: string]: number; }
	{
		return this.spell.LevelRequirements;
	}

	get classLevels(): { className: string, level: number }[]
	{
		return this._classLevels;
	}

	get duration(): string
	{
		return this.spell.Duration;
	}

	get resistance(): string {
		return this.spell.HasSpellResistance ? this.spell.SpellResistance : "no";
	}

	get components(): string
	{
		const self = this;
		return this.spell.Components ? this.spell.Components.map(toString).join(",") : null;

		function toString(x: ISpellComponent): string {
			return x.Description ? `${x.ComponentType} (${x.Description})` : x.ComponentType;
		}
	}

	getIcon(magicSchool: MagicSchool): string
	{
		switch (magicSchool)
		{
			case MagicSchool.Abjuration:
				return "shield";
			case MagicSchool.Conjuration:
				return "portal";
			case MagicSchool.Divination:
				return "crystal-ball";
			case MagicSchool.Enchantment:
				return "upgrade";
			case MagicSchool.Evocation:
				return "screaming";
			case MagicSchool.Illusion:
				return "";
			case MagicSchool.Necromancy:
				return "";
			case MagicSchool.Transmutation:
				return "";
			case MagicSchool.Universal:
			default:
				return "magic-swirl";
		}
	}
}
