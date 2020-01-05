import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const appRoutes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'users/:peopleName', component: PeopleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
