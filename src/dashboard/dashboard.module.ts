import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { DashboardComponent } from "./dashboard.component";
import { CharactersComponent } from "./characters/characters.component";
import { CharactersService } from "./characters/characters.service";
import { ActivityFeedComponent } from "./activityFeed/activityFeed.component";
import { ActivityFeedService } from "./activityFeed/activityFeed.service";

@NgModule({
	declarations: [
		DashboardComponent,
		CharactersComponent,
		ActivityFeedComponent
	],
	exports: [
	],
	imports: [
		RouterModule,
		SharedModule
	],
	providers: [
		ActivityFeedService,
		CharactersService
	],
})
export class DashboardModule { }
