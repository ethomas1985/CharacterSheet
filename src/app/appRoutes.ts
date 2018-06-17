import { Routes, Route } from "@angular/router";

import { SecurityService } from "../security/security.service";

import { LoginComponent } from "../security/login.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SpellBookComponent } from "spellbook/components/spellbook/spellbook.component";

export const AppRoutes = [
	<Route>{ path: "login", component: LoginComponent },
	<Route>{ path: "dashboard", component: DashboardComponent, canActivate: [SecurityService] },
	<Route>{ path: "spellbook", component: SpellBookComponent, canActivate: [SecurityService] },
	<Route>{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	<Route>{ path: "**", redirectTo: "/dashboard" },
];
