export class Candidat {
  //   public _id: number;
  //   public prenom: string;
  //   public nom: string;

  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string,
    public recrue?: boolean
  ) {
    // this._id = _id;
    // this.prenom = prenom;
    // this.nom = nom;
  }
}
