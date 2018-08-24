import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatInputModule,MatDialogModule,MatSidenavModule,MatListModule } from "@angular/material";
import {MainComponent} from "./views/main/main.component";
import {FlexLayoutModule} from "@angular/flex-layout";



import {AppRoutingModule} from "./app-routing.module";
import { ManageClientsComponent } from './views/manage-clients/manage-clients.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManageVehicalsComponent } from './views/manage-vehicals/manage-vehicals.component';
import { ManageGuidesComponent } from './views/manage-guides/manage-guides.component';
import { ManageDriversComponent } from './views/manage-drivers/manage-drivers.component';
import { ManageLocationsComponent } from './views/manage-locations/manage-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ManageClientsComponent,
    DashboardComponent,
    ManageVehicalsComponent,
    ManageGuidesComponent,
    ManageDriversComponent,
    ManageLocationsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
