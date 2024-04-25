import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  myObs: Observable<Number>;
  inscription: Subscription;

  ngOnInit() {
    // this.myObs = new Observable((observer: Observer<String>) => {
    //   setTimeout(() => {
    //     observer.next('First Package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('Second Package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('Third Package');
    //   }, 6000);

    // setTimeout(() => {
    //   observer.error(new Error('Erreur DMWM-B'));
    // }, 8000);
    // setTimeout(() => {
    //   observer.complete();
    // }, 9000);
    // setTimeout(() => {
    //   observer.next('4th Package');
    // }, 10000);
    // });
    this.myObs = new Observable((observer: Observer<Number>) => {
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });

    this.inscription = this.myObs.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err) => {
        console.log('Erreur capturé', err);
      },
      complete: () => {
        console.log('Flux terminé');
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
