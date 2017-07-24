import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./appRoutes";
import { DashboardModule } from "../dashboard/dashboard.module";
import { SharedModule } from "../shared/shared.module";
import { SecurityModule } from "../security/security.module";
import { OmniBarComponent } from "./omniBar/omniBar.component";
import { NineBoxService } from "./omniBar/nineBox.service";

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
		RouterModule.forRoot(AppRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
		SecurityModule,
		DashboardModule
	],
	providers: [NineBoxService],
	bootstrap: [AppComponent]
})
export class AppModule { }
