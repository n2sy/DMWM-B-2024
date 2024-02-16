import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('DMWM-B');
    }, 3000);
  });
  selectedStatut = '';
  tabServers = [
    {
      name: 'Development Server',
      type: 'small',
      date_d: new Date(2023, 3, 5),
      statut: 'critical',
    },
    {
      name: 'Testing Development Server',
      type: 'large',
      date_d: new Date(2022, 5, 3),
      statut: 'stable',
    },
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2023, 3, 5),
      statut: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(2023, 3, 5),
      statut: 'stable',
    },
  ];

  addServer() {
    this.tabServers.push({
      name: 'NEW SERVER',
      type: 'medium',
      date_d: new Date(2023, 3, 5),
      statut: 'stable',
    });
  }

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable', // ? true : false,
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
