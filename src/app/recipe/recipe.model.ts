import { Ingridient } from '../shared/ingridient.model';

export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public Ingridients: Ingridient[];

  constructor(name: string, desc: string, imgpath: string,ingridients : Ingridient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgpath;
    this.Ingridients = ingridients;
  }
}
