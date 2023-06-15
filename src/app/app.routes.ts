import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { OrdersComponent } from '@myngapp/orders';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: NxWelcomeComponent},
  {
    path: 'products',
    loadComponent: () => import('@myngapp/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
]