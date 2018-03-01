import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: 'principal', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
