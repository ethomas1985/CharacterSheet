import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { SecurityService } from "./security.service";
import { LoginComponent } from "./login.component";

@NgModule({
	declarations: [
		LoginComponent
	],
	exports: [
		LoginComponent
	],
	imports: [
		FlexLayoutModule,
		SharedModule
	],
	providers: [
		SecurityService
	],
})
export class SecurityModule { }
