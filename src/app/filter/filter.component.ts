import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  tabCands: Candidat[] = [];
  searchByName(nom) {
    console.log(nom);
    if (nom != '') {
      let params = new HttpParams().set('filter', nom);
      this.http
        .get('http://localhost:3000/cv/candidats', { params })
        .subscribe({
          next: (response: Candidat[]) => {
            this.tabCands = response;
            console.log(this.tabCands);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.tabCands = [];
    }
  }
  constructor(private http: HttpClient) {}
}
