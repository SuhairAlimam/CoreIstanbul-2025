import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'employee-details', redirectTo: '/employee-list', pathMatch: 'full' },
  { path: 'class-binding', component: ClassBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'user-list', component: UserListComponent},
  { path: 'user-details/:id', component:UserDetailsComponent},
  { path: 'user-details', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'angular-material', loadChildren: () => import('./angular-material/angular-material.module').then(m => m.AngularMaterialModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
