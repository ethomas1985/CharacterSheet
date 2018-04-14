import { NgModule } from "@angular/core";

import { SpellBookComponent } from "./spellbook.component";
import { SharedModule } from "shared/shared.module";
import { SpellSearchService } from "./spellSearch.service";

@NgModule({
	imports: [
		SharedModule
	],
	exports: [],
	declarations: [
		SpellBookComponent
	],
	providers: [
		SpellSearchService
	],
})
export class SpellBookModule { }
