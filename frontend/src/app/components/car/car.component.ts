import { Component} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  private _carName:string = 'BMW';
  private _carYear:number = 2017;
  private _carModel:string = 'X5';
  private _carSpeed:number = 250;
  private _colors:IColors = {
    car: 'white',
    salon: 'black',
    wheels: 'silver'
  };
  private _carFunctions:string[] = ['Start', 'Stop', 'Drive'];
  private _editForm:boolean = false;
  get carName(): string {
    return this._carName;
  }

  set carName(value: string) {
    this._carName = value;
  }

  get carYear(): number {
    return this._carYear;
  }

  set carYear(value: number) {
    this._carYear = value;
  }

  get carModel(): string {
    return this._carModel;
  }

  set carModel(value: string) {
    this._carModel = value;
  }

  get carSpeed(): number {
    return this._carSpeed;
  }

  set carSpeed(value: number) {
    this._carSpeed = value;
  }

  get colors(): IColors {
    return this._colors;
  }

  set colors(value: IColors) {
    this._colors = value;
  }

  get carFunctions(): string[] {
    return this._carFunctions;
  }

  set carFunctions(value: string[]) {
    this._carFunctions = value;
  }


  get editForm(): boolean {
    return this._editForm;
  }

  set editForm(value: boolean) {
    this._editForm = value;
  }

  CarOption(carName:string) {
   if (carName === 'BMW') {
     this._carName = 'BMW';
     this._carYear = 2017;
     this._carModel = 'X5';
     this._carSpeed = 250;
     this._colors = {
       car: 'white',
       salon: 'black',
       wheels: 'silver'
     };

   }
    else if (carName === 'Audi') {
      this._carName = 'Audi';
      this._carYear = 2015;
      this._carModel = 'A8';
      this._carSpeed = 240;
      this._colors = {
        car: 'black',
        salon: 'white',
        wheels: 'silver'
      };
   }
    else if (carName === 'Mercedes') {
      this._carName = 'Mercedes';
      this._carYear = 2016;
      this._carModel = 'S500';
      this._carSpeed = 260;
      this._colors = {
        car: 'silver',
        salon: 'black',
        wheels: 'silver'
      };
   }
  }

  addCarFunction(value: string):boolean {
    this._carFunctions.push(value);
    return false;
  }

  deleteCarFunction(option: string):void {
    for (let i = 0; i < this._carFunctions.length; i++) {
      if (this._carFunctions[i] === option) {
        this._carFunctions.splice(i, 1);
        break;
      }
    }
  }

  showEditForm():void {
     this._editForm = !this._editForm;
  }
}
interface IColors {
  car: string,
  salon: string,
  wheels: string
}
