import {Component, Input} from "@angular/core";
import {user} from "../interfaces/user.interface";
import {contact} from "../interfaces/contact.interface";
import {WeatherService} from "../services/weather.service";


@Component({
  selector:"app-examangular",
  templateUrl:"./examangular.component.html"
})
export class ExamangularComponent{
  user: user[] = [];
  contact: contact[] = [];
  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(){
    this.weatherService.contactList().subscribe(value => {
      this.user = value.data.user;
      this.contact = value.data.contact;
    })
  }
}



