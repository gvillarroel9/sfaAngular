import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsuarioService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    appRoutingProviders,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
