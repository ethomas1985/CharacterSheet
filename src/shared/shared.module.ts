import { DomSanitizer } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { CommonModule, JsonPipe } from "@angular/common";
import
{
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatIconRegistry,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule
} from "@angular/material";

import { FieldComponent } from "./field/field.component";
import { GroupComponent } from "./group/group.component";
import { InputComponent } from "./input/input.component";
import { TitleComponent } from "./title/title.component";
import { TypeAheadComponent } from "./typeahead/typeAhead.component";

import { Utilities } from "./utilities.functions";
import { Input } from "@angular/core/src/metadata/directives";
import { Title } from "@angular/platform-browser/src/browser/title";
import { AlignmentService } from "shared/alignment.service";
import { RaceService } from "./race.service";

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		HttpModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
	],
	exports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		HttpModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,

		FieldComponent,
		GroupComponent,
		InputComponent,
		TitleComponent,
		TypeAheadComponent
	],
	providers: [
		Utilities,
		AlignmentService,
		RaceService
	],
	declarations: [
		FieldComponent,
		GroupComponent,
		InputComponent,
		TitleComponent,
		TypeAheadComponent
	]
})
export class SharedModule
{
	constructor(MatIconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
	{
		MatIconRegistry.addSvgIcon("pope-crown", sanitize("/assets/icons/delapouite/originals/svg/000000/transparent/pope-crown.svg"));

		MatIconRegistry.addSvgIcon("fireball", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/fireball.svg"));

		MatIconRegistry.addSvgIcon("pocket-bow", sanitize("/assets/icons/lorc/originals/svg/000000/transparent/pocket-bow.svg"));

		function sanitize(value)
		{
			return sanitizer.bypassSecurityTrustResourceUrl(value);
		}
	}
}
