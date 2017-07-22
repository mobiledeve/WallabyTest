"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const dashboard_component_1 = require("./dashboard.component");
const list_component_1 = require("./list.component");
const edit_entity_component_1 = require("./edit-entity.component");
const view_entity_component_1 = require("./view-entity.component");
const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: ':entityName/list',
        component: list_component_1.ListComponent
    },
    {
        path: ':entityName/edit/:id',
        component: edit_entity_component_1.EditEntityComponent
    },
    {
        path: ':entityName/view/:id',
        component: view_entity_component_1.ViewEntityComponent
    },
    {
        path: ':entityName/add/:parentPropertyName/:parentId',
        component: edit_entity_component_1.EditEntityComponent
    },
    {
        path: ':entityName/add',
        component: edit_entity_component_1.EditEntityComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map