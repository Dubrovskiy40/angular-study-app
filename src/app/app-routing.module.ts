import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsComponent } from './components/forms/forms.component';
import {MainComponent} from "./components/main/main.component";
import { ServicesComponent } from './components/services/services.component';
import {DirectivesAttributeComponent} from "./components/directives-attribute/directives-attribute.component";
import {DirectivesStructuralComponent} from "./components/directives-structural/directives-structural.component";
import {DirectivesComponentsComponent} from "./components/directives-components/directives-components.component";

const directivesRoutes: Routes = [
  {path: 'directives/components', component: DirectivesComponentsComponent},
  {path: 'directives/attribute', component: DirectivesAttributeComponent},
  {path: 'directives/structural', component: DirectivesStructuralComponent},
];

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'directives', component: DirectivesComponent, children: directivesRoutes},
  {path: 'services', component: ServicesComponent},
  {path: 'forms', component: FormsComponent},
  {path: '**', redirectTo: '', component: MainComponent} //{ path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
