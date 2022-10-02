import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsComponent } from './components/forms/forms.component';
import {MainComponent} from "./components/main/main.component";
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'forms', component: FormsComponent},
  {path: '**', redirectTo: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
