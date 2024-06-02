import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../shared/model/skillInterface';

@Component({
  selector: 'app-std-form-table',
  templateUrl: './std-form-table.component.html',
  styleUrls: ['./std-form-table.component.scss']
})
export class StdFormTableComponent implements OnInit {

  @ViewChild('fname') fname !: ElementRef
  @ViewChild('lname') lname !: ElementRef 
  @ViewChild('email') email !: ElementRef 
  @ViewChild('contact') contact !: ElementRef 
  stdArray :Array<Istd> = [
    {
    fname :  'ram',
    lname :  'dev',
    email :  'rd7@gmail.co',
    contact : '1234567890'
  },
  {
    fname :  'rajiv',
    lname :  'dixit',
    email :  'rajivd7@gmail.co',
    contact : '1234567890'
  }
]

  constructor() { }

  ngOnInit(): void {
  }
  addStudent(){
    let obj: Istd = {
     fname: this.fname.nativeElement.value,
   lname: this.lname.nativeElement.value,
   email: this.email.nativeElement.value,
   contact: this.contact.nativeElement.value
    }
    console.log(obj)
    this.stdArray.push(obj)
  }


}
