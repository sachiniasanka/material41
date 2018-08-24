import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./views/main/main.component";
import {ManageClientsComponent} from "./views/manage-clients/manage-clients.component";


const appRoutes: Routes = [
  {
    path: "main",
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      // {path: "dashboard", component: DashboardComponent},
      {
        path: "manage-clients",
        component: ManageClientsComponent,
        // canDeactivate: [ManageClientComponentCandeactivateGuard]
      },
      // {
      //   path: "manage-guides",
      //   component: ManageGuidesComponent,
      //   canDeactivate: [ManageGuideComponentCandeactivateGuard]
      // },
      // {
      //   path: "manage-drivers",
      //   component: ManageDriversComponent,
      //   canDeactivate: [ManageDriverComponentCandeactivateGuard]
      // },
      // {
      //   path: "manage-orders",
      //   component: ManageOrdersComponent,
      // },
      // {
      //   path: "manage-hotels",
      //   component: ManageHotelComponent,
      //   canDeactivate: [ManageHotelComponentCandeactivateGuard]
      // },
      // {
      //   path: "manage-locations",
      //   component: ManageLocationsComponent,
      //   canDeactivate: [ManageLocationComponentCandeactivateGuard]
      // },
      // {
      //   path: "manage-vehical",
      //   component: ManageVehicalComponent,
      //   canDeactivate: [ManageVehicalComponentCandeactivateGuard]
      // },
      // {
      //   path: "",
      //   pathMatch : "full",
      //   redirectTo: "/main/dashboard"
      // }
    ]
  },
  // {path: "login", component: LoginComponent},
  // {path: "", pathMatch: "full", redirectTo: "/main/dashboard"}
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
