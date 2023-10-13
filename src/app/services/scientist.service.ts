import { Injectable } from '@angular/core';
import { Scientist } from '../model/scientist.model';

import { Field } from '../model/field.model';

@Injectable({
providedIn: 'root'
})
export class ScientistService {
  fields : Field[] = [];

  apiURL: string = 'http://localhost:8090/scientists/api';

  scientists: Scientist[] = [];
constructor() {
  this.fields =
  [
    {id : 1, name : "Mathematics and logic"},
    {id : 2, name : "biological science"},
    {id : 3, name : "physical science"},
    {id : 4, name : "social science"}
  ];

  this.scientists =
  [
    { id : 1, name : "Ibn al-Haytham", birthDate : new Date("01/14/2011"), deathDate
    : new Date("01/14/2011"), field : this.fields[2]},
    { id : 2, name : "Leonardo da Vinci", birthDate : new Date("01/14/2011"), deathDate
    : new Date("01/14/2011"), field : this.fields[0]},
    { id : 3, name : "Ibn Sina", birthDate : new Date("01/14/2011"), deathDate
    : new Date("01/14/2011"), field : this.fields[1]}
  ]
}

listScientists():Scientist[] {
  return this.scientists;
}

addScientist( scientist: Scientist){
this.scientists.push(scientist);
}
deleteScientist( scientist: Scientist){
  const index = this.scientists.indexOf(scientist, 0);
  if (index > -1) {
  this.scientists.splice(index, 1);
  }
  }
  scientist! : Scientist;
  consultScientist(id:number): Scientist{
    this.scientist = this.scientists.find(s => s.id == id)!;
    return this.scientist;
  }
  sortScientists(){
    n1: Scientist;
    n2: Scientist;
    this.scientists = this.scientists.sort((n1,n2) => {
    if (n1 > n2)
      return 1;
    if (n1 < n2)
      return -1;
    return 0;
    });
  }
      
    updateScientist(s:Scientist)
    {
    this.deleteScientist(s);
    this.addScientist(s);
    this.sortScientists();
    }
    listFields(): Field[] {
      return this.fields;
    }
    consultField(id:number): Field {
      return this.fields.find(field => field.id == id)!;
    }
    scientistsSearch: Scientist[] = [];
    searchByField(id: number): Scientist[]{
      this.scientistsSearch = [];
  
      this.scientists.forEach((cur, index) => {
        if(id == cur.field.id) {
          console.log("cur " + cur);
          this.scientistsSearch.push(cur);
        }
      });
      return this.scientistsSearch;
    }
    searchByName(name: String): Scientist[]{
      this.scientistsSearch = [];
  
      this.scientists.forEach((cur, index) => {
       if(name == cur.name) {
           console.log("cur "+cur);
          this.scientistsSearch.push(cur);
           }
     });
     return this.scientistsSearch;
     }
}
