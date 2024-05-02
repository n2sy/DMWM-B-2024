import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  // providers: [GestionCandidatsService],
})
export class ListeComponent {
  tabCands: Candidat[] = [];
  @Output() candToCv = new EventEmitter();
  candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (data: Candidat[]) => {
        this.tabCands = data;
      },
      error: (err) => {
        console.log(err);
        alert('Problème...Chargement des données fictives');
        this.tabCands = this.candSer.getAllCandidats();
      },
    });
  }

  showListe() {
    console.log(this.candSer.getAllCandidats());
  }

  sendCandToCv(cand) {
    this.candToCv.emit(cand);
  }
}
