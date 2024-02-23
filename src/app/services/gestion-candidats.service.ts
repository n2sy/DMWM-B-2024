import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'directeur', 'homer.png'),
    new Candidat(3, 'Lisa', 'Simpson', 30, 'designer', 'lisa.png'),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }

  addNewCandidat() {
    this.allCandidats.push(new Candidat(3, 'NEW', 'CANDIDAT', 30, 'designer'));
  }
  constructor() {}
}
