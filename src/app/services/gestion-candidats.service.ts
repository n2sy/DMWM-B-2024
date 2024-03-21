import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'ingénieur'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'directeur'),
    new Candidat(3, 'Lisa', 'Simpson', 30, 'designer'),
    new Candidat(4, 'Nidhal', 'Jelassi', 30, 'designer'),
  ];

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }

  getAllCandidats() {
    // this.allCandidats = this.allCandidats.map((cand) => {
    //   cand.avatar = `https://api.dicebear.com/8.x/lorelei/svg?seed=${cand.prenom}`;
    //   return cand;
    // });
    // return this.allCandidats;

    // this.allCandidats.forEach((cand) => {
    //   cand.avatar = `https://api.dicebear.com/8.x/lorelei/svg?seed=${cand.prenom}`;
    // });
    return this.allCandidats;
  }

  addNewCandidat() {
    this.allCandidats.push(new Candidat(3, 'NEW', 'CANDIDAT', 30, 'designer'));
  }
  constructor() {}
}
