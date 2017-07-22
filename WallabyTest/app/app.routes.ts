import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list.component';
import {EditEntityComponent} from "./edit-entity.component";
import {ViewEntityComponent} from "./view-entity.component";
const appRoutes: Routes = [
	{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: ':entityName/list',
        component: ListComponent
    },
    {
        path: ':entityName/edit/:id',
        component: EditEntityComponent
    },
    {
        path: ':entityName/view/:id',
        component: ViewEntityComponent
	},
	{
		path: ':entityName/add/:parentPropertyName/:parentId',
		component: EditEntityComponent
	},
	{
		path: ':entityName/add',
		component: EditEntityComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
