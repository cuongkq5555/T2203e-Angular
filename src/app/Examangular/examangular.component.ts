import {Component, Input} from "@angular/core";
import {IExam2} from "../interfaces/examangular.interface";


@Component({
  selector:"app-examangular",
  templateUrl:"./examangular.component.html"
})
export class ExamangularComponent{
  data : IExam2[] = [
    {Title: 'Sale Representive 1', HireDate: '10/05/1996', Address: '7 Houndstooth Rd.', City:'London', Phone:'(71) 555-4444'},
  ];
}


