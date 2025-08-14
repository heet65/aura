import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CarsComponent } from './pages/cars/cars.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

    {
        path:'login',
        component:LoginComponent
    }, {
        path:'car',
        component:CarsComponent
    },{
        path:'bike',
        component:BikesComponent
    }
];
