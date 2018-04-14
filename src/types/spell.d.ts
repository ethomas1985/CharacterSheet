

declare interface ISpell
{
	School: MagicSchool;
	SubSchool: MagicSubSchool;
	MagicDescriptors: MagicDescriptor[];
	SavingThrow: string;
	Description: string;
	HasSpellResistance: boolean;
	SpellResistance: string;
	CastingTime: string;
	Range: string;

	LevelRequirements: { [key: string]: number };

	Duration: string;
	Components: ISpellComponent[];
}

declare interface ISpellComponent
{
	ComponentType: ComponentType;
	Description: string;
}

declare enum MagicSchool
{
	Universal,
	Abjuration,
	Conjuration,
	Divination,
	Enchantment,
	Evocation,
	Illusion,
	Necromancy,
	Transmutation,
}

declare enum MagicSubSchool
{
	Universal,
	None,
	Calling,
	Creation,
	Healing,
	Summoning,
	Teleportation,
	Scrying,
	Charm,
	Compulsion,
	Figment,
	Glamer,
	Pattern,
	Phantasm,
	Shadow,
	Polymorph
}

declare enum MagicDescriptor
{
	Universal,
	Acid,
	Air,
	Chaotic,
	Cold,
	Darkness,
	Death,
	Earth,
	Electricity,
	Evil,
	Fear,
	Fire,
	Force,
	Good,
	LanguageDependent,
	Lawful,
	Light,
	MindAffecting,
	Sonic,
	Water
}

declare enum ComponentType
{
	Verbal,
	Somatic,
	Material,
	Focus,
	DivineFocus
}