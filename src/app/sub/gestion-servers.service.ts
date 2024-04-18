import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServersService {
  private tabServers = [
    {
      id: 1,
      nom: 'Oussama Server',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Samir Server',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Ahmed Server',
      statut: 'online',
    },
  ];

  getServers() {
    return this.tabServers;
  }

  getServerById(id) {
    return this.tabServers.find((serv) => serv.id == id);
  }

  constructor() {}
}
