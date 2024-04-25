import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  selectedCandidat: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: GestionCandidatsService
  ) {}

  ngOnInit() {
    // Verison 1 avec snapshot
    //this.id = this.activatedRoute.snapshot.params['id'];
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    //Version 2 avec observables
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedCandidat = this.candSer.getCandidatById(p.get('id'));
        console.log(this.selectedCandidat);

        if (!this.selectedCandidat) {
          alert('Candidat introuvable !');
          this.router.navigateByUrl('/');
        }
      },
      // error : ,
      // complete : () {

      // },
    });
  }

  onDelete() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.selectedCandidat._id);
      this.router.navigateByUrl('/cv');
    }
  }
}
