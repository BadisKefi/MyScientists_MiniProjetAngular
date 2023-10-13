import { Component, OnInit } from '@angular/core';
import { Scientist } from '../model/scientist.model';
import { ScientistService } from '../services/scientist.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-scientists',
  templateUrl: './scientists.component.html',
})
export class ScientistsComponent implements OnInit {

  scientists: Scientist[] = [];
  

  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private scientistService: ScientistService,
    public authService: AuthService)
{
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

  ngOnInit(): void {
    this.scientists = this.scientistService.listScientists();
  }
}