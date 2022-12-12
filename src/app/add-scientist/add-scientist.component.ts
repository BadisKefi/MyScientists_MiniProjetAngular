import { Component, OnInit } from '@angular/core';
import { Scientist } from '../model/scientist.model';
import { ScientistService } from '../services/scientist.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Field } from '../model/field.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-add-scientist',
  templateUrl: './add-scientist.component.html',
})
export class AddScientistComponent implements OnInit {
  newScientist = new Scientist();
  fields! : Field[];
  newIdField! : number;
  newField! : Field;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private scientistService: ScientistService, public authService: AuthService) { }  
    ngOnInit() {
      this.fields = this.scientistService.listFields();
    }
    addScientist() {
      this.newField = this.scientistService.consultField(this.newIdField);
      this.newScientist.field = this.newField;
      this.scientistService.addScientist(this.newScientist)
      this.router.navigate(['scientists']);
    }
}