import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  name: string = 'Samir';
  age: number = 24;
  color: string = 'pink';
  hd: boolean = true;

  clickHandler() {
    alert("J'ai été cliqué");
  }
  traitementDuParent(msg: any) {
    this.name = msg;
  }
}
