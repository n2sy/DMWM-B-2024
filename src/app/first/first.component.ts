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
}
