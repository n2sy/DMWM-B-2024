import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent {
  serverToEdit;
  constructor(
    private actRoute: ActivatedRoute,
    private serService: GestionServersService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.id = this.actRoute.snapshot.paramMap.get('serverid');
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serverToEdit = this.serService.getServerById(p.get('id'));
      },
    });
  }
}
