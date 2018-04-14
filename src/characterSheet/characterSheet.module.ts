import { NgModule } from "@angular/core";

import { CharacterService } from "./character.service";
import { CharacterSheetRoutingModule } from "./characterSheet.Routing";

import { CharacterSheetComponent } from "./characterSheet.component";

import { CharacterSummaryComponent } from "./Summary/characterSummary.component";
import { AbilityScoreComponent } from "./Summary/abilityScore/abilityScore.component";
import { AbilityScoresComponent } from "./Summary/abilityScore/abilityScores.component";
import { AlignmentInputComponent } from "./Summary/characterBasics/alignmentInput/alignmentInput.component";
import { ArmorClassComponent } from "./Summary/armorClass/armorClass.component";
import { CharacterBasicsComponent } from "./Summary/characterBasics/characterBasics.component";
import { ClassesComponent } from "./Summary/classes/classes.component";
import { HitPointsComponent } from "./Summary/hitPoints/hitPoints.component";
import { InitiativeComponent } from "./Summary/initiative/initiative.component";
import { RaceInputComponent } from "./Summary/characterBasics/raceInput/raceInput.component";
import { SavingThrowsComponent } from "./Summary/savingThrows/savingThrows.component";
import { SpeedComponent } from "./Summary/speed/speed.component";

// import { SpellBookComponent } from "./Spellbook/spellbook.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
	imports: [
		SharedModule,
		CharacterSheetRoutingModule
	],
	exports: [],
	declarations: [
		CharacterSummaryComponent,
		AbilityScoreComponent,
		AbilityScoresComponent,
		AlignmentInputComponent,
		ArmorClassComponent,
		CharacterBasicsComponent,
		CharacterSheetComponent,
		ClassesComponent,
		HitPointsComponent,
		InitiativeComponent,
		RaceInputComponent,
		SavingThrowsComponent,
		SpeedComponent,
		// SpellBookComponent
	],
	providers: [
		CharacterService
	],
})
export class CharacterSheetModule { }
