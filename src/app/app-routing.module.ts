import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const appRoutes: Routes = [
  { path: '', component: PeopleComponent,  data: {animation: 'PeopleComponent', title: 'Home', icon: ''} },
  // tslint:disable-next-line: max-line-length
  { path: 'users/:peopleName', component: PeopleDetailComponent,  data: {animation: 'PeopleDetailComponent', title: 'Person', icon: 'ion-ios-arrow-left'}},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
