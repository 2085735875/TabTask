import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  selectedFrameWork : string = 'react'
  constructor() { }

  ngOnInit(): void {
  }
  onClick(val : string){
    this.selectedFrameWork = val
  }

}
