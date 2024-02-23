import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {
  constructor(private secondSer: SecondService) {}

  afficherInfos() {
    console.log('Je suis le premier service');
    this.secondSer.afficherSalut();
  }
}
