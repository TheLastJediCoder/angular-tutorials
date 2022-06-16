import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-one',
  template: `
    <p>This is practice one component</p>
  `,
  styles: [
    `p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }`
  ]
})
export class PracticeOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
