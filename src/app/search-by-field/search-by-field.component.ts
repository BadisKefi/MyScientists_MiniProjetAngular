import { Component, OnInit } from '@angular/core';
import { Field } from '../model/field.model';
import { Scientist } from '../model/scientist.model';
import { AuthService } from '../services/auth.service';
import { ScientistService } from '../services/scientist.service';
@Component({
  selector: 'app-search-by-field',
  templateUrl: './search-by-field.component.html',
})
export class SearchByFieldComponent implements OnInit{
  scientists: Scientist[] = [];
  fields: Field[] = [];
  IdField: number = 0;
  constructor(private scientistService: ScientistService, public authService: AuthService){}
  ngOnInit():void {
    this.fields = this.scientistService.listFields();
    this.scientists = [];
  }
  onchange(){
    this.scientists = this.scientistService.searchByField(this.IdField);
  }
  deleteScientist(s: Scientist)
  {
    let conf = confirm("Are you sure you want to delete " + s.name + " ?");
    if (conf) {
      this.scientistService.deleteScientist(s)
      this.deleteScientistFromTable(s);
    }
  }
  deleteScientistFromTable(scientist : Scientist)
  {
    this.scientists.forEach((cur, index) => {
    if(scientist.id=== cur.id)
      this.scientists.splice(index, 1);
    });
  }  
}