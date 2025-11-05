import { Routes } from '@angular/router';
import { PropertiesComponent } from './landlord/properties/properties.component';
import { authorityrouteAccess } from './core/auth/authority-route-access';

export const routes: Routes = [
  {
    path: 'landlord/properties',
    component: PropertiesComponent,
    canActivate: [authorityrouteAccess],
    data:{
      authorities: ["ROLE_LANDLORD"]
    }
  }
];
