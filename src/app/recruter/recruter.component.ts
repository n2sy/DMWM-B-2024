import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tabRecrues: Candidat[] = [];
  constructor(private recrueSer: GestionRecruesService) {}

  ngOnInit() {
    this.tabRecrues = this.recrueSer.getAllRecrues();
  }
}
