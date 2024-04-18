import { Component } from '@angular/core';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrl: './home-servers.component.css',
})
export class HomeServersComponent {
  allServers = [];
  constructor(private serService: GestionServersService) {}

  ngOnInit() {
    this.allServers = this.serService.getServers();
  }
}
