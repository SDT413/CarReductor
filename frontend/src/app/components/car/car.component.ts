import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from "./car";
import {Feature} from "./feature";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  private _cars:Car[] = [];
  private _carID:number = 0;
  private _carName:string = '';
  private _carYear:number = 0;
  private _carModel:string = '';
  private _carSpeed:number = 0;
  private _colors:IColors = {
    car: '',
    salon: '',
    wheels: ''
  };
  public _carFeatures:Feature[] = [];
  private _editForm:boolean = false;
  constructor(private carService: CarService) {
  }
  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this._cars = cars;
      this._carID = cars[0].id;
      this._carName = cars[0].name;
      this._carYear = cars[0].year;
      this._carModel = cars[0].model;
      this._carSpeed = cars[0].speed;
      this._colors = {
        car: cars[0].car_color,
        salon: cars[0].salon_color,
        wheels: cars[0].wheels_color
      }
      this.carService.getCarFeatures(cars[0].id).subscribe(features => {
        this._carFeatures = features;
      });
  });

}
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

  get editForm(): boolean {
    return this._editForm;
  }
  get cars(): string[] {
    let cars:string[] = [];
    for (let i = 0; i < this._cars.length; i++) {
      cars.push(this._cars[i].name);
    }
    return cars;
  }
  get carFeatures(): string[] {
    let features:string[] = [];
    for (let i = 0; i < this._carFeatures.length; i++) {
      features.push(this._carFeatures[i].feature);
    }
    return features;
  }


  CarOption(carName:string) {
    this.cars.forEach((value, index) => {
      if (value === carName) {
        this._carID = this._cars[index].id;
        this._carName = this._cars[index].name;
        this._carYear = this._cars[index].year;
        this._carModel = this._cars[index].model;
        this._carSpeed = this._cars[index].speed;
        this._colors = {
          car: this._cars[index].car_color,
          salon: this._cars[index].salon_color,
          wheels: this._cars[index].wheels_color

        }
        this._carFeatures = this._cars[index].features;
      }
    });
  }
  deleteFeature(option: string):void {
    for (let i = 0; i < this._carFeatures.length; i++) {
      if (this._carFeatures[i].feature === option) {
        this.carService.deleteCarFeature(this._carID,this._carFeatures[i].id).subscribe(
          () => this._carFeatures.splice(i, 1)
        );
        break;
      }
    }
  }
  deleteCar(carName: string):void {
    for (let i = 0; i < this._cars.length; i++) {
      if (this._cars[i].name === carName) {
        this.carService.deleteCar(this._cars[i].id).subscribe(
          () => this._cars.splice(i, 1)
        );
        break;
      }
    }
  }

  showEditForm():void {
     this._editForm = !this._editForm;
  }
  UpdateCar():void {
    this.carService.updateCar({
      id: this._carID,
      name: this._carName,
      year: this._carYear,
      model: this._carModel,
      speed: this._carSpeed,
      car_color: this._colors.car,
      salon_color: this._colors.salon,
      wheels_color: this._colors.wheels,
      features: this._carFeatures
    }).subscribe(car => {
      this._cars.push(car);
    });
  }

  SaveCar():void {
      this.carService.addCar({
        id: 0,
        name: this._carName,
        year: this._carYear,
        model: this._carModel,
        speed: this._carSpeed,
        car_color: this._colors.car,
        salon_color: this._colors.salon,
        wheels_color: this._colors.wheels,
        features: this._carFeatures
    }).subscribe(car => {
      this._cars.push(car);
    });
  }
  addCarFeature(option: string):void {
  let feature : Feature = {
      feature: option
    } as Feature;
    this.carService.addCarFeature(this._carID,feature).subscribe(feature => {
      this._carFeatures.push(feature);
    });
  }

}
interface IColors {
  car: string,
  salon: string,
  wheels: string
}
