import { Component, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [FirstService, GestionRecruesService],
})
export class CvComponent {
  // tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;
  firstSer = inject(FirstService);
  candSer = inject(GestionCandidatsService);

  //constructor(private firstSer: FirstService) {}

  ngOnInit() {
    this.firstSer.afficherInfos();
    // this.tabCandidats = this.candSer.getAllCandidats();
  }

  showListe() {
    console.log(this.candSer.getAllCandidats());
  }

  addCandidat() {
    // this.candSer.addNewCandidat();
  }

  recupererCand(cand) {
    this.selectedCandidat = cand;
  }
}
