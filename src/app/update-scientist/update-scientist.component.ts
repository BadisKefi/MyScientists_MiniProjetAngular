

import { Component, OnInit } from '@angular/core';
import { ScientistService } from '../services/scientist.service';
import { Scientist } from '../model/scientist.model';

import { ActivatedRoute,Router } from '@angular/router';
import { Field } from '../model/field.model';


@Component({
selector: 'app-update-scientist',
templateUrl: './update-scientist.component.html',
styles: []
})
export class UpdateScientistComponent implements OnInit {
  fields! : Field[];
  updatedFieldId! : number;
  currentScientist = new Scientist();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private scientistService: ScientistService){}
 
  ngOnInit() {
    this.currentScientist = this.scientistService.consultScientist(this.activatedRoute.snapshot.params['id']);
    this.fields = this.scientistService.listFields();
    this.updatedFieldId=this.currentScientist.field.id;
    }
    updateScientist() {
      this.currentScientist.field=this.scientistService.consultField(this.updatedFieldId);
      this.scientistService.updateScientist(this.currentScientist);
      this.router.navigate(['scientists']);
    }
}

