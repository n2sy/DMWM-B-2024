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
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response: Candidat) => {
            this.selectedCandidat = response;
          },
          error: (err) => {
            alert('Candidat introuvable !');
            this.router.navigateByUrl('/not-found');
          },
        });
      },
      // error : ,
      // complete : () {

      // },
    });
  }

  onDelete() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat._id).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
