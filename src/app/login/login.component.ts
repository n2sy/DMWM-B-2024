import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  allSections = ['', 'GL', 'DMWM', 'DSEN'];
  defaultSection = 'DMWM';
  myComment = 'RAS...';
  showError = false;
  constructor(private authSer: AuthService, private router: Router) {}
  submitHandler(f) {
    console.log(f.value);
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        alert(response['message']);
        const decoded = jwtDecode(response['token']);
        console.log('decoded Token', decoded);

        localStorage.setItem('access_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
        this.showError = true;
        f.reset();
      },
    });
  }

  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: 'azerty123',
      MySection: '',
      commentaire: '',
      erreurs: '',
    });
  }

  generatePwd2(f: NgForm) {
    f.form.patchValue({
      password: 'azerty123',
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
