import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  allSections = ['', 'GL', 'DMWM', 'DSEN'];
  defaultSection = 'DMWM';
  myComment = 'RAS...';
  submitHandler(f) {
    console.log(f.value);
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
