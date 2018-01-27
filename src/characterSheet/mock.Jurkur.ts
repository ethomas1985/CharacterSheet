import
{
	AbilityScore,
	Character,
	CharacterClass,
	DefensiveScore,
	DefensiveScoreType,
	Purse,
	SavingThrow,
	SavingThrowType,
} from "./characterSheet.types";

const _sorcerer = <CharacterClass>{
	class: "Sorcerer",
	level: 4,
	isFavored: true,
	baseAttackBonus: 2,
	Fortitude: 1,
	Reflex: 1,
	Will: 4,
	hitPoints: [
		6,
		6,
		8,
		6
	]
};

const _strength = <AbilityScore>{
	type: "strength",
	score: 7,
	modifier: -2,
	base: 9,
	enhanced: 0,
	inherent: 0,
	penalty: 0,
	temporary: -2
};
const _dexterity = <AbilityScore>{
	type: "dexterity",
	score: 9,
	modifier: -1,
	base: 9,
	enhanced: 0,
	inherent: 0,
	penalty: 0,
	temporary: 0
};
const _constitution = <AbilityScore>{
	type: "constitution",
	score: 14,
	modifier: 2,
	base: 12,
	enhanced: 0,
	inherent: 0,
	penalty: 0,
	temporary: 2
};
const _intelligence = <AbilityScore>{
	type: "intelligence",
	score: 11,
	modifier: 0,
	base: 11,
	enhanced: 0,
	inherent: 0,
	penalty: 0,
	temporary: 0
};
const _wisdom = <AbilityScore>{
	type: "wisdom",
	score: 11,
	modifier: 0,
	base: 11,
	enhanced: 0,
	inherent: 0,
	penalty: 0,
	temporary: 0
};
const _charisma = <AbilityScore>{
	type: "charisma",
	score: 18,
	modifier: 4,
	base: 16,
	enhanced: 0,
	inherent: 0,
	penalty: 0,
	temporary: 2
};

const _armorClass = <DefensiveScore>{
	type: DefensiveScoreType.armorClass,
	score: 10,
	armorBonus: 0,
	shieldBonus: 0,
	dexterityModifier: -1,
	sizeModifier: 1,
	deflectBonus: 0,
	dodgeBonus: 0,
	naturalBonus: 0,
	temporaryBonus: 0
};
const _flatFooted = <DefensiveScore>{
	type: DefensiveScoreType.flatFooted,
	score: 11,
	armorBonus: 0,
	shieldBonus: 0,
	dexterityModifier: 0,
	sizeModifier: 1,
	deflectBonus: 0,
	dodgeBonus: 0,
	naturalBonus: 0,
	temporaryBonus: 0
};
const _touch = <DefensiveScore>{
	type: DefensiveScoreType.touch,
	score: 10,
	armorBonus: 0,
	shieldBonus: 0,
	dexterityModifier: -1,
	sizeModifier: 1,
	deflectBonus: 0,
	dodgeBonus: 0,
	naturalBonus: 0,
	temporaryBonus: 0
};
const _combatManeuverDefense = <DefensiveScore>{
	type: DefensiveScoreType.combatManeuverDefense,
	score: 10,
	strengthModifier: -2,
	baseAttackBonus: 2,
	dexterityModifier: -1,
	sizeModifier: 1,
	deflectBonus: 0,
	dodgeBonus: 0,
	naturalBonus: 0,
	temporaryBonus: 0
};

const _fortitude = <SavingThrow>{
	type: SavingThrowType.fortitude,
	abilityModifier: 2,
	base: 1,
	resist: 0,
	misc: 0,
	temporary: 0,
	score: 3
};
const _reflex = <SavingThrow>{
	type: SavingThrowType.reflex,
	abilityModifier: -1,
	base: 1,
	resist: 0,
	misc: 0,
	temporary: 0,
	score: 0
};
const _will = <SavingThrow>{
	type: SavingThrowType.will,
	abilityModifier: 0,
	base: 4,
	resist: 0,
	misc: 0,
	temporary: 0,
	score: 4
};

const jorkur = <Character>{
	id: "fb2df686-a3ec-4303-a11d-a90074197357",
	age: 28,
	alignment: "chaoticGood",
	gender: "male",
	height: "3' 6\"",
	weight: "42 lbs.",
	name: "Jorkur",
	race: "Gnome",
	baseSize: "small",
	size: "small",
	languages: [
		"Common",
		"Gnome",
		"Sylvan"
	],
	maxHealthPoints: 34,
	damage: 12,
	healthPoints: 22,
	baseSpeed: 20,
	speed: 20,
	purse: {
		copper: 0,
		silver: 0,
		gold: 0,
		platinum: 0
	},
	initiative: -1,
	classes: [
		_sorcerer
	],
	strength: _strength,
	dexterity: _dexterity,
	constitution: _constitution,
	intelligence: _intelligence,
	wisdom: _wisdom,
	charisma: _charisma,
	armorClass: _armorClass,
	flatFooted: _flatFooted,
	touch: _touch,
	combatManeuverDefense: _combatManeuverDefense,
	fortitude: _fortitude,
	reflex: _reflex,
	will: _will,
	// Melee: {
	// 	type: "melee",
	// 	Abilitymodifier: -2,
	// 	baseAttackBonus: 2,
	// 	Sizemodifier: 1,
	// 	temporarymodifier: 0,
	// 	score: 1
	// },
	// Ranged: {
	// 	type: "ranged",
	// 	Abilitymodifier: -1,
	// 	baseAttackBonus: 2,
	// 	Sizemodifier: 1,
	// 	temporarymodifier: 0,
	// 	score: 2
	// },
	// CombatManeuverBonus: {
	// 	type: "combatManeuverBonus",
	// 	Abilitymodifier: -2,
	// 	baseAttackBonus: 2,
	// 	Sizemodifier: 1,
	// 	temporarymodifier: 0,
	// 	score: 1
	// },
	// SkillScores: [
	// 	{
	// 		Skill: "Survival",
	// 		Ability: "wisdom",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Use Magic Device",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 1,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Intimidate",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 0,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Perform",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Diplomacy",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Acrobatics",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Perception",
	// 		Ability: "wisdom",
	// 		Abilitymodifier: 0,
	// 		Ranks: 2,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Escape Artist",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 1,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Swim",
	// 		Ability: "strength",
	// 		Abilitymodifier: -2,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Appraise",
	// 		Ability: "intelligence",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Heal",
	// 		Ability: "wisdom",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Linguistics",
	// 		Ability: "intelligence",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Sleight of Hand",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Disable Device",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Craft",
	// 		Ability: "intelligence",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Bluff",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 1,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Spellcraft",
	// 		Ability: "intelligence",
	// 		Abilitymodifier: 0,
	// 		Ranks: 2,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Sense Motive",
	// 		Ability: "wisdom",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Fly",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 0,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Profession",
	// 		Ability: "wisdom",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 3,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Disguise",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Stealth",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 2,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Knowledge",
	// 		Ability: "intelligence",
	// 		Abilitymodifier: 0,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Handle Animal",
	// 		Ability: "charisma",
	// 		Abilitymodifier: 4,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Climb",
	// 		Ability: "strength",
	// 		Abilitymodifier: -2,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	},
	// 	{
	// 		Skill: "Ride",
	// 		Ability: "dexterity",
	// 		Abilitymodifier: -1,
	// 		Ranks: 0,
	// 		Classmodifier: 0,
	// 		Miscmodifier: 0,
	// 		armorClasspenalty: 0
	// 	}
	// ],
	// Experience: [
	// 	{
	// 		Title: "Event 1",
	// 		Description: "Freebie",
	// 		ExperiencePoints: 2000
	// 	},
	// 	{
	// 		Title: "Event 2",
	// 		Description: "Defeated Bugbear, killed some spiders",
	// 		ExperiencePoints: 1200
	// 	},
	// 	{
	// 		Title: "Event 3",
	// 		Description: "Killed 1 Spider and 2 Gnomes",
	// 		ExperiencePoints: 290
	// 	},
	// 	{
	// 		Title: "Event 4",
	// 		Description: "Killed 4 bandits",
	// 		ExperiencePoints: 667
	// 	},
	// 	{
	// 		Title: "Event 5",
	// 		Description: "Killed 1 mouthy ozee thing, and 6 humans",
	// 		ExperiencePoints: 660
	// 	},
	// 	{
	// 		Title: "Event 6",
	// 		Description: "Killed 2 Humans, and 1 Wight",
	// 		ExperiencePoints: 350
	// 	},
	// 	{
	// 		Title: "Event 7",
	// 		Description: "Killed Jaris Phenogian and his Iron Cobra",
	// 		ExperiencePoints: 400
	// 	},
	// 	{
	// 		Title: "Event 8",
	// 		Description: "Killed an Automaton, Tarrin and 2 bandits",
	// 		ExperiencePoints: 440
	// 	}
	// ],
	// Feats: [
	// 	{
	// 		Name: "Dodge",
	// 		Feattype: "combat",
	// 		Description: "Your training and reflexes allow you to react swiftly to avoid an opponents' attacks.",
	// 		Benefit: " You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.",
	// 		Special: "",
	// 		Prerequisites: [
	// 			"Dex 13"
	// 		]
	// 	},
	// 	{
	// 		Name: "Eschew Materials",
	// 		Feattype: "general",
	// 		Description: "You can cast many spells without needing to utilize minor material components.",
	// 		Benefit: " You can cast any spell with a material component costing 1 gp or less without needing that component. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than 1 gp, you must have the material component on hand to cast the spell, as normal.",
	// 		Special: "",
	// 		Prerequisites: [
	// 			""
	// 		]
	// 	},
	// 	{
	// 		Name: "Toughness",
	// 		Feattype: "general",
	// 		Description: "You have enhanced physical stamina.",
	// 		Benefit: " You gain +3 hit points. For every Hit Die you possess beyond 3, you gain an additional +1 hit point. If you have more than 3 Hit Dice, you gain +1 hit points whenever you gain a Hit Die (such as when you gain a level).",
	// 		Special: "",
	// 		Prerequisites: [
	// 			""
	// 		]
	// 	},
	// 	{
	// 		Name: "Spell Focus",
	// 		Feattype: "general",
	// 		Description: "Choose a school of magic. Any spells you cast of that school are more difficult to resist.",
	// 		Benefit: " Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select.",
	// 		Special: " You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic.",
	// 		Prerequisites: [
	// 			""
	// 		],
	// 		Specialization: "Evocation"
	// 	}
	// ],
	// Inventory: [
	// 	{
	// 		Key: {
	// 			Name: "Dagger",
	// 			Itemtype: "weapon",
	// 			Category: "",
	// 			Description: "<p>A dagger has a blade that is about 1 foot in length. You get a +2 bonus on Sleight of Hand skill checks made to conceal a dagger on your body (see Using Skills).</p>",
	// 			Weight: 1,
	// 			Cost: {
	// 				Copper: 0,
	// 				Silver: 0,
	// 				Gold: 0,
	// 				Platinum: 0
	// 			}
	// 		},
	// 		Value: 1
	// 	},
	// 	{
	// 		Key: {
	// 			Name: "Bolts",
	// 			Itemtype: "weapon",
	// 			Category: "",
	// 			Description: "<p>A crossbow bolt used as a melee weapon is treated as a light improvised weapon (&ndash;4 penalty on attack rolls) and deals damage as a dagger of its size (crit &times;2). Bolts come in a case or quiver that holds 10 bolts (or 5, for a repeating crossbow). </p>",
	// 			Weight: 1,
	// 			Cost: {
	// 				Copper: 0,
	// 				Silver: 0,
	// 				Gold: 0,
	// 				Platinum: 0
	// 			}
	// 		},
	// 		Value: 11
	// 	},
	// 	{
	// 		Key: {
	// 			Name: "Quarterstaff",
	// 			Itemtype: "weapon",
	// 			Category: "",
	// 			Description: "<p>A quarterstaff is a simple piece of wood, about 5 feet in length.</p>",
	// 			Weight: 4,
	// 			Cost: {
	// 				Copper: 0,
	// 				Silver: 0,
	// 				Gold: 0,
	// 				Platinum: 0
	// 			}
	// 		},
	// 		Value: 1
	// 	},
	// 	{
	// 		Key: {
	// 			Name: "Crossbow, Light",
	// 			Itemtype: "weapon",
	// 			Category: "",
	// 			Description: "<p>You draw a light crossbow back by pulling a lever. Loading a light crossbow is a move action that provokes attacks of opportunity.</p><p>Normally, operating a light crossbow requires two hands. However, you can shoot, but not load, a light crossbow with one hand at a &ndash;2 penalty on attack rolls. You can shoot a light crossbow with each hand, but you take a penalty on attack rolls as if attacking with two light weapons. This penalty is cumulative with the penalty for one-handed firing.</p>",
	// 			Weight: 4,
	// 			Cost: {
	// 				Copper: 0,
	// 				Silver: 0,
	// 				Gold: 0,
	// 				Platinum: 0
	// 			}
	// 		},
	// 		Value: 1
	// 	},
	// 	{
	// 		Key: {
	// 			Name: "Full Plate",
	// 			Itemtype: "armor",
	// 			Category: "",
	// 			Description: "<p>This metal suit includes gauntlets, heavy leather boots, a visored helmet, and a thick layer of padding that is worn underneath the armor. Each suit of full plate must be individually fitted to its owner by a master armorsmith, although a captured suit can be resized to fit a new owner at a cost of 200 to 800 (2d4 &times; 100) gold pieces.</p>",
	// 			Weight: 50,
	// 			Cost: {
	// 				Copper: 0,
	// 				Silver: 0,
	// 				Gold: 0,
	// 				Platinum: 0
	// 			}
	// 		},
	// 		Value: 1
	// 	}
	// ],
	// EquipedArmor: {
	// 	Armor: {
	// 		Name: "Full Plate",
	// 		Itemtype: "armor",
	// 		Category: "",
	// 		Description: "<p>This metal suit includes gauntlets, heavy leather boots, a visored helmet, and a thick layer of padding that is worn underneath the armor. Each suit of full plate must be individually fitted to its owner by a master armorsmith, although a captured suit can be resized to fit a new owner at a cost of 200 to 800 (2d4 &times; 100) gold pieces.</p>",
	// 		Weight: 50,
	// 		Cost: {
	// 			Copper: 0,
	// 			Silver: 0,
	// 			Gold: 0,
	// 			Platinum: 0
	// 		}
	// 	}
	// }
};

export function GetMockJurkur(): Character
{
	return jorkur;
}
