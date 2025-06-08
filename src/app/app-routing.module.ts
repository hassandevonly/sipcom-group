import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './social/accueil/accueil.component';
import { ContactComponent } from './social/contact/contact.component';
import { ServicesComponent } from './social/services/services.component';
import { BlogComponent } from './social/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Accueil',
    pathMatch:'full'
  },
  {
    path: 'Accueil',
    component: AccueilComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Services',
    component: ServicesComponent
  },
  {
    path: 'Blog',
    component: BlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
