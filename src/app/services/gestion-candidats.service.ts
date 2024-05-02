import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  constructor(private http: HttpClient) {}

  private allCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'ingénieur'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'directeur'),
    new Candidat(3, 'Lisa', 'Simpson', 30, 'designer'),
    new Candidat(4, 'Nidhal', 'Jelassi', 30, 'designer'),
  ];

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }
  getCandidatByIdAPI(id): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.link}/${id}`);
    // return this.http.get(this.link + "/" + id);
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand._id == id);
    this.allCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
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

  updateCandidat(uCand) {
    console.log(uCand);

    let i = this.allCandidats.findIndex((cand) => cand._id == uCand._id);
    console.log(i);

    this.allCandidats[i] = uCand;
    console.log(this.allCandidats);
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/free/${uCand._id}`, uCand);
  }

  addNewCandidat(newCand) {
    newCand['_id'] = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    delete newCand.age;
    console.log(newCand);

    this.allCandidats.push(newCand);
  }
  addNewCandidatAPI(newCand) {
    return this.http.post(`${this.link}/free`, newCand);
  }
}
