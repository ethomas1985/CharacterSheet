import { NgModule } from "@angular/core";

import { CharacterService } from "./character.service";
import { CharacterSheetRoutingModule } from "./characterSheet.Routing";

import { AbilityScoreComponent } from "./abilityScore/abilityScore.component";
import { AbilityScoresComponent } from "./abilityScore/abilityScores.component";
import { AlignmentInputComponent } from "./characterBasics/alignmentInput/alignmentInput.component";
import { ArmorClassComponent } from "./armorClass/armorClass.component";
import { CharacterBasicsComponent } from "./characterBasics/characterBasics.component";
import { CharacterSheetComponent } from "./characterSheet.component";
import { ClassesComponent } from "./classes/classes.component";
import { HitPointsComponent } from "./hitPoints/hitPoints.component";
import { InitiativeComponent } from "./initiative/initiative.component";
import { RaceInputComponent } from "./characterBasics/raceInput/raceInput.component";
import { SavingThrowsComponent } from "./savingThrows/savingThrows.component";
import { SpeedComponent } from "./speed/speed.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
	imports: [
		SharedModule,
		CharacterSheetRoutingModule
	],
	exports: [],
	declarations: [
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
	],
	providers: [
		CharacterService
	],
})
export class CharacterSheetModule { }
