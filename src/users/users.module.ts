import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdCardModule, MdInputModule } from "@angular/material";

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
		BrowserAnimationsModule,
		FormsModule,
		MdCardModule,
		MdInputModule
	],
	providers: [
		SecurityService
	],
})
export class UsersModule { }
