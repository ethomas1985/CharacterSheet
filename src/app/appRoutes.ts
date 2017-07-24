import { Routes, Route } from "@angular/router";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginComponent } from "../security/login.component";
import { SecurityService } from "../security/security.service";

export const AppRoutes = [
	<Route>{ path: "login", component: LoginComponent },
	<Route>{ path: "dashboard", component: DashboardComponent, canActivate: [SecurityService] },
	<Route>{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	<Route>{ path: "**", redirectTo: "/dashboard" },
];
