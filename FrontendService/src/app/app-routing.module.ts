import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CrudPageComponent } from './crud-page/crud-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'crud-page', component: CrudPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
