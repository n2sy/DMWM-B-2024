import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  id = 5;
  constructor(private router: Router) {}

  goToServers() {
    this.router.navigateByUrl('servers');
  }

  //skander/cv/id
  goToCv() {
    this.router.navigate(['cv']);
  }
}
