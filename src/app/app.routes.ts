import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormulaComponent } from './shared/components/formula/formula.component';
import { AnalyzComponent } from './components/user/analyz/analyz.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'analyz', component: AnalyzComponent },
    { path: 'test', component: FormulaComponent },
    { path: '**', redirectTo: 'login' },
];
