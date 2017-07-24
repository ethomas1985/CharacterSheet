import { FlexLayoutModule } from "@angular/flex-layout";
import { MdCardModule, MdInputModule, MD_PLACEHOLDER_GLOBAL_OPTIONS } from "@angular/material";
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
		MdCardModule,
		MdInputModule,
		SharedModule
	],
	providers: [
		SecurityService
	],
})
export class SecurityModule { }
