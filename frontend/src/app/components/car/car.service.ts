import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Car} from "./car";
import {Feature} from "./feature";


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiServerUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiServerUrl}/api/cars/`);
  }
  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiServerUrl}/api/cars/`, car);
  }
  public updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiServerUrl}/api/cars/`, car);
  }
  public deleteCar(carId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/cars/${carId}`);
  }
  public getCarFeatures(carId: number): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${this.apiServerUrl}/api/cars/${carId}/features/`);
  }
  public addCarFeature(carId: number, feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(`${this.apiServerUrl}/api/cars/${carId}/features/`, feature);
  }
  public deleteCarFeature(carId: number, featureId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/cars/${carId}/features/${featureId}`);
  }
}
