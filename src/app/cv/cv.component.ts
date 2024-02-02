import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'directeur', 'homer.png'),
    new Candidat(3, 'Lisa', 'Simpson', 30, 'designer', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  recupererCand(cand) {
    this.selectedCandidat = cand;
  }
}
