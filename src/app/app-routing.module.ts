import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { AuthGuard } from './guards/auth.guard';
import { RamdonContactPageComponent } from './pages/ramdon-contact-page/ramdon-contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contacts/:id',
        component: ContactDetailPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'tasks',
        component: TasksPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'random',
        component: RamdonContactPageComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'random',
    component: RamdonContactPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
