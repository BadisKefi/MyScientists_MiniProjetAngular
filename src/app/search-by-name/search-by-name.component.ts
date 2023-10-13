import { Component, OnInit } from '@angular/core';
import { Scientist } from '../model/scientist.model';
import { AuthService } from '../services/auth.service';
import { ScientistService } from '../services/scientist.service';
@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
})
export class SearchByNameComponent implements OnInit{
  allScientists: Scientist[] = [];
  scientists: Scientist[] = [];
  searchTerm: String = "";
  constructor(private scientistService: ScientistService, public authService: AuthService){}
  ngOnInit():void {
    this.allScientists = this.scientistService.listScientists();
    this.scientists = this.allScientists;
  }
  searchScientists() {
    this.scientists = this.scientistService.searchByName(this.searchTerm);
  }
  onKeyUp(filterText : string){
    this.scientists = this.allScientists.filter(item => item.name?.toLowerCase().includes(filterText));
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
