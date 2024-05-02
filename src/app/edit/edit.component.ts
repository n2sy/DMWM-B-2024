import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candToEdit: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private candSer: GestionCandidatsService
  ) {}

  ngOnInit() {
    this.candSer
      .getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (data) => {
          this.candToEdit = data;
        },
      });
  }

  onSubmit(val) {
    val._id = this.candToEdit._id;
    this.candSer.updateCandidatAPI(val).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
