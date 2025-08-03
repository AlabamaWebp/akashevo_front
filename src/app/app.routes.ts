import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormulaComponent } from './shared/components/formula/formula.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'test', component: FormulaComponent },
    { path: '**', redirectTo: 'login' },
];
