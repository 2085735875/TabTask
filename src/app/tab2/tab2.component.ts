import { Component, OnInit } from '@angular/core';
import { Iskill } from '../shared/model/skillInterface';
import { skills } from '../shared/const/skills';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {

  skillsArray : Array<Iskill> = skills;
  framework : string = 'angular'
  constructor() { }

  ngOnInit(): void {
  }

  selectSkill(val : string){
    this.framework = val;
  }

}
