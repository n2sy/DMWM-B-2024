import { HttpClient } from '@angular/common/http';
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
    private router: Router,
    private http: HttpClient
  ) {}
  onSubmit(event, newCandidat) {
    console.log(newCandidat);
    console.log(event);
    console.log(event.value);
    console.log(event.target[4].files[0]);

    let formData = new FormData();
    formData.append('avatar', event.target[4].files[0]);

    this.http.post('http://localhost:3000/images/upload', formData).subscribe({
      next: (response) => {
        newCandidat.avatar = response['fileName'];
        this.candSer.addNewCandidatAPI(newCandidat).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
        });
        //  response['fileName'];
      },
      error: (err) => {
        alert('Vérifiez le format du fichier...');
      },
    });
  }
}
