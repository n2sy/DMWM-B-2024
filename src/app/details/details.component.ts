import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCand: Candidat;

  constructor(private recrueSer: GestionRecruesService) {}

  addNewRecrue() {
    this.recrueSer.addRecrue(this.selCand);
  }
}
