import { Routes, Route } from "@angular/router";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginComponent } from "../users/login.component";

export const AppRoutes = [
	<Route>{ path: "login", component: LoginComponent },
	<Route>{ path: "dashboard", component: DashboardComponent },
];
