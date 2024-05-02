import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}
  onSubmit(newCandidat) {
    console.log(newCandidat);

    this.candSer.addNewCandidatAPI(newCandidat).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
