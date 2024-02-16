import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() sendAcc = new EventEmitter();

  sendNewAccountToHome(inp, st) {
    console.log(inp, st);
    this.sendAcc.emit(
      {
        name : inp,
        statut : st
      }
    )
  }
}
