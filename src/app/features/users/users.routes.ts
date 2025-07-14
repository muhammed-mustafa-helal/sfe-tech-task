import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

export const USERS_PATH = 'users'

export const USERS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./users-list-page/users-list-page.component').then(c => c.UsersListPageComponent)
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    loadComponent: () => import('./user-form-page/user-form-page.component').then(c => c.UserFormPageComponent)
  },
  {
    path: ':id',
    canActivate: [AuthGuard],
    loadComponent: () => import('./user-form-page/user-form-page.component').then(c => c.UserFormPageComponent)
  }
]
