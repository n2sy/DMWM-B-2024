import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  link = 'http://localhost:3000/cv';

  allRecrues: Candidat[] = [];

  getAllRecrues() {
    this.http.get(`${this.link}/recrues`).subscribe({
      next: (response: Candidat[]) => {
        console.log(response);

        this.allRecrues = response;
      },
    });
  }

  addRecrue(newRecrue) {
    this.http
      .patch(`${this.link}/candidats/recruter/${newRecrue._id}`, {
        recrue: true,
      })
      .subscribe({
        next: (response) => {
          alert(response['message']);
          this.allRecrues.push(response['result']);
        },
      });
    // if (this.allRecrues.indexOf(newRecrue) == -1)
    //   this.allRecrues.push(newRecrue);
    // else alert(`${newRecrue.prenom} ${newRecrue.nom} a déjà été recrutée`);
  }
  constructor(private http: HttpClient) {}
}
