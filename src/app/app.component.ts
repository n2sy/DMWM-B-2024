import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DMWM-B-2024';
  obs$: Observable<Object[]>;

  traitementDuApp(msg) {
    alert(msg);
  }
}
