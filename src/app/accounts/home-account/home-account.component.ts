import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css'
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      name : 'Nidhal Account',
      statut : 'active'
    },
    {
      name : 'Skander Account',
      statut : 'inactive'
    }
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
