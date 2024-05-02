import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  id = 5;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux terminée');
      },
    });
  }

  goToServers() {
    this.router.navigateByUrl('servers');
  }

  //skander/cv/id
  goToCv() {
    this.router.navigate(['cv']);
  }
}
