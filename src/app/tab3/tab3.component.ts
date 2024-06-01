import { Component, OnInit } from '@angular/core';
import { Iskill } from '../shared/model/skillInterface';
import { skills } from '../shared/const/skills';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {

  skillsArray : Array<Iskill> = skills;
  
  selectedSkill : string = 'angular'
  constructor() { }

  ngOnInit(): void {
  }

//   select(val : string ){
//     this.selectedSkill = val
//   }
 }
