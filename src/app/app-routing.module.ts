import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScientistsComponent } from './scientists/scientists.component';
import { AddScientistComponent } from './add-scientist/add-scientist.component';

import { UpdateScientistComponent } from './update-scientist/update-scientist.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ScientistGuard } from './services/scientist.guard';
import { SearchByFieldComponent } from './search-by-field/search-by-field.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';


const routes: Routes = [
  {path: "scientists", component : ScientistsComponent},
  {path: "updateScientist/:id", component: UpdateScientistComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-scientist", component : AddScientistComponent, canActivate:[ScientistGuard]},
  {path: "searchByField", component : SearchByFieldComponent},
  {path: "searchByName", component : SearchByNameComponent},
  {path: "", redirectTo: "scientists", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
