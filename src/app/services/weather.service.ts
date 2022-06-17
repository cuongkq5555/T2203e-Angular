import {HttpClient, HttpParams} from "@angular/common/http";
import {IWeather} from "../interfaces/weather.interface";
import {Injectable} from "@angular/core";
import {ICategory, IDataJSON} from "../interfaces/category.interface";
import {IDataJSON1} from "../interfaces/contact.interface"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  static BASE_URL: string = 'https://api.openweathermap.org/data/2.5/';
  static APPID: string = '09a71427c59d38d6a34f89b47d75975c';
  constructor(private httpClient: HttpClient) {
  }

  currentWeather(cityCode: string){
    var parameters = new HttpParams();
    parameters = parameters.append('q',cityCode);
    parameters = parameters.append('appid',WeatherService.APPID);
    parameters = parameters.append('units','metric');
    return this.httpClient.get<IWeather>(WeatherService.BASE_URL+"weather",
      {
        params: parameters
      })
  }

  foreCast(cityCode: string){
    var parameters = new HttpParams();
    parameters = parameters.append('q',cityCode);
    parameters = parameters.append('appid',WeatherService.APPID);
    parameters = parameters.append('units','metric');
    return this.httpClient.get<any>(WeatherService.BASE_URL+"forecast",
      {
        params: parameters
      })
  }

  mailList(){
    return this.httpClient.get<IDataJSON>('http://localhost:4200/assets/data.json');
  }
  contactList(){
    return this.httpClient.get<IDataJSON1>('http://localhost:4200/assets/data1.json');
  }

}
