import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css',
})
export class InfoServerComponent {
  server;
  showEditButton;
  constructor(
    private actRoute: ActivatedRoute,
    private serService: GestionServersService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.id = this.actRoute.snapshot.paramMap.get('serverid');
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.server = this.serService.getServerById(p.get('serverid'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.showEditButton = q.get('allowEdit') == '0' ? true : false;
      },
    });
  }

  goToEdit() {
    //Obligé de passer par un chemin absolue
    // On veut faire asser à l'url destination le queryParams allowEdit
    this.router.navigate(['/servers', this.server.id, 'edit'], {
      queryParams: { allowEdit: '3' },
    });
  }
}
