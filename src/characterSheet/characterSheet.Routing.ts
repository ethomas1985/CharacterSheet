import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CharacterSheetComponent } from "./characterSheet.component";

const routes: Routes = [
	{ path: "character/:id", component: CharacterSheetComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CharacterSheetRoutingModule { }

export const routedComponents = [CharacterSheetComponent];
