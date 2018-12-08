

export interface ISpell
{
	Name: string;
	School: MagicSchool;
	SubSchools: MagicSubSchool[];
	MagicDescriptors: MagicDescriptor[];
	SavingThrow: string;
	Description: string[];
	HasSpellResistance: boolean;
	SpellResistance: string;
	CastingTime: string;
	Range: string;

	LevelRequirements: { [key: string]: number };

	Duration: string;
	Components: ISpellComponent[];
}

export interface ISpellComponent
{
	ComponentType: ComponentType;
	Description: string;
}

export type MagicSchool = "Universal"
	| "Abjuration"
	| "Conjuration"
	| "Divination"
	| "Enchantment"
	| "Evocation"
	| "Illusion"
	| "Necromancy"
	| "Transmutation";

export type MagicSubSchool =
	"Universal" |
	"None" |
	"Calling" |
	"Creation" |
	"Healing" |
	"Summoning" |
	"Teleportation" |
	"Scrying" |
	"Charm" |
	"Compulsion" |
	"Figment" |
	"Glamer" |
	"Pattern" |
	"Phantasm" |
	"Shadow" |
	"Polymorph";

export type MagicDescriptor =
	"None" |
	"Universal" |
	"Acid" |
	"Air" |
	"Chaotic" |
	"Cold" |
	"Darkness" |
	"Death" |
	"Earth" |
	"Electricity" |
	"Evil" |
	"Fear" |
	"Fire" |
	"Force" |
	"Good" |
	"LanguageDependent" |
	"Lawful" |
	"Light" |
	"MindAffecting" |
	"Sonic" |
	"Water";

export type ComponentType =
	"Verbal" |
	"Somatic" |
	"Material" |
	"Focus" |
	"DivineFocus";
