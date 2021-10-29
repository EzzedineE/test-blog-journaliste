export class Articles {
  titre: string;
  description: string;

  constructor(titre: string = '', description: string = '') {
    (this.titre = titre), (this.description = description);
  }
}
