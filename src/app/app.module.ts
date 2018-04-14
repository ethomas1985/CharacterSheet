import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MATERIAL_COMPATIBILITY_MODE } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./appRoutes";
import { CharacterSheetModule } from "../characterSheet/characterSheet.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { SharedModule } from "../shared/shared.module";
import { SecurityModule } from "../security/security.module";
import { OmniBarComponent } from "./omniBar/omniBar.component";
import { NineBoxService } from "./omniBar/nineBox.service";
import { SpellBookComponent } from "spellbook/spellbook.component";
import { SpellBookModule } from "spellbook/spellBook.module";
import { ApiClientService } from "../shared/apiClient.service";

@NgModule({
	declarations: [
		AppComponent,
		OmniBarComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		FlexLayoutModule,
		FormsModule,
		RouterModule.forRoot(
			AppRoutes,
			// { enableTracing: true } // <-- debugging purposes only
		),
		SecurityModule,
		DashboardModule,
		CharacterSheetModule,
		SpellBookModule
	],
	providers: [
		{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
		NineBoxService,
		ApiClientService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
