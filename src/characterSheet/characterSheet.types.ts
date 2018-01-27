
export enum DefensiveScoreType
{
	armorClass,
	flatFooted,
	touch,
	combatManeuverDefense
}

export interface Purse
{
	copper: number;
	silver: number;
	gold: number;
	platinum: number;
}

export interface CharacterClass
{
	class: string;
	level: number;
	isFavored: boolean;
	baseAttackBonus: number;
	Fortitude: number;
	Reflex: number;
	Will: number;
	hitPoints: number[];
}

export interface AbilityScore
{
	type: string;
	score: number;
	modifier: number;
	base: number;
	enhanced: number;
	inherent: number;
	penalty: number;
	temporary: number;
}

export interface DefensiveScore
{
	type: DefensiveScoreType;
	score: number,
	armorBonus?: number,
	shieldBonus?: number,
	dexterityModifier: number,
	strengthModifier?: number,
	sizeModifier: number,
	deflectBonus: number,
	dodgeBonus: number,
	naturalBonus: number,
	temporaryBonus: number
}

export enum SavingThrowType {
	fortitude, reflex, will
}

export interface SavingThrow
{
	type: SavingThrowType,
	abilityModifier: number,
	base: number,
	resist: number,
	misc: number,
	temporary: number,
	score: number
}

export interface Character
{
	id: string;
	age?: number;
	alignment?: string;
	gender?: string;
	height?: string;
	weight?: string;
	name?: string;
	race?: string;

	baseSize?: string;
	size?: string;

	languages?: string[];

	maxHealthPoints?: number;
	damage?: number;
	healthPoints?: number;

	baseSpeed?: number;
	speed?: number;

	purse?: Purse,

	initiative?: number;

	classes?: CharacterClass[];

	strength?: AbilityScore;
	dexterity?: AbilityScore;
	constitution?: AbilityScore;
	intelligence?: AbilityScore;
	wisdom?: AbilityScore;

	charisma?: AbilityScore;
	armorClass: DefensiveScore;
	flatFooted: DefensiveScore;
	touch: DefensiveScore;
	combatManeuverDefense: DefensiveScore;

	fortitude: SavingThrow,
	reflex: SavingThrow,
	will: SavingThrow,
}
