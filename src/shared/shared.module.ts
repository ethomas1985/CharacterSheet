import { DomSanitizer } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { CommonModule, JsonPipe } from "@angular/common";
import
{
	MaterialModule,
	MD_PLACEHOLDER_GLOBAL_OPTIONS,
	MdAutocompleteModule,
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdCheckboxModule,
	MdChipsModule,
	MdCoreModule,
	MdDatepickerModule,
	MdDialogModule,
	MdExpansionModule,
	MdGridListModule,
	MdIconModule,
	MdIconRegistry,
	MdInputModule,
	MdListModule,
	MdMenuModule,
	MdNativeDateModule,
	MdPaginatorModule,
	MdProgressBarModule,
	MdProgressSpinnerModule,
	MdRadioModule,
	MdRippleModule,
	MdSelectModule,
	MdSidenavModule,
	MdSliderModule,
	MdSlideToggleModule,
	MdSnackBarModule,
	MdSortModule,
	MdTableModule,
	MdTabsModule,
	MdToolbarModule,
	MdTooltipModule
} from "@angular/material";

import { Utilities } from "./utilities.functions";


@NgModule({
	imports: [
	],
	exports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		MdAutocompleteModule,
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdCheckboxModule,
		MdChipsModule,
		MdCoreModule,
		MdDatepickerModule,
		MdDialogModule,
		MdExpansionModule,
		MdGridListModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdNativeDateModule,
		MdPaginatorModule,
		MdProgressBarModule,
		MdProgressSpinnerModule,
		MdRadioModule,
		MdRippleModule,
		MdSelectModule,
		MdSidenavModule,
		MdSliderModule,
		MdSlideToggleModule,
		MdSnackBarModule,
		MdSortModule,
		MdTableModule,
		MdTabsModule,
		MdToolbarModule,
		MdTooltipModule,
	],
	providers: [
		Utilities
	]
})
export class SharedModule
{
	constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer)
	{
		mdIconRegistry.addSvgIcon("pope-crown", sanitize("/assets/icons/delapouite/originals/svg/000000/transparent/pope-crown.svg"));

		mdIconRegistry.addSvgIcon("fireball", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/fireball.svg"));

		mdIconRegistry.addSvgIcon("pocket-bow", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/pocket-bow.svg"));

		function sanitize(value) {
			return sanitizer.bypassSecurityTrustResourceUrl(value);
		}
	}
}
