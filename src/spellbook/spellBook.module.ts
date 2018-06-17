import { NgModule } from "@angular/core";

import { SpellBookComponent } from "./components/spellbook/spellbook.component";
import { SharedModule } from "shared/shared.module";
import { SpellSearchService } from "./services/spellSearch.service";
import { SpellCardComponent } from "./components/spellCard/spellCard.component";

@NgModule({
	imports: [
		SharedModule
	],
	exports: [],
	declarations: [
		SpellBookComponent,
		SpellCardComponent
	],
	providers: [
		SpellSearchService
	],
})
export class SpellBookModule { }
