import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  bg = 'pink';
  cl = 'grey';
  class1 = true;
  class2 = false;
  class3 = false;

  changeStyle() {
    this.bg = 'green';
    this.cl = 'blue';
  }

  switchClass() {
    if (this.class1) {
      this.class1 = false;
      this.class2 = true;
    } else if (this.class2) {
      this.class2 = false;
      this.class3 = true;
    } else {
      this.class3 = false;
      this.class1 = true;
    }
  }
}
