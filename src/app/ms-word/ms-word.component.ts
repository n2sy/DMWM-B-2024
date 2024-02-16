import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css'
})
export class MsWordComponent {
  bgColor;
  txtColor;
  txtSize;
  txtFont;
  @ViewChild('sz', { static: true }) inputSize;

  ngOnInit() {
    console.log(this.inputSize);
    
  }

  changeSize() {
    console.log(this.inputSize);
    
    let unité = prompt("Veuillez saisir l'unité");
    this.txtSize = `${this.inputSize.nativeElement.value}${unité}`;
  }
}
