import { Candidat } from '../models/candidat';

// @Injectable({
//   providedIn: 'root',
// })
export class GestionRecruesService {
  private allRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.allRecrues;
  }

  addRecrue(newRecrue) {
    if (this.allRecrues.indexOf(newRecrue) == -1)
      this.allRecrues.push(newRecrue);
    else alert(`${newRecrue.prenom} ${newRecrue.nom} a déjà été recrutée`);
  }
  constructor() {}
}
