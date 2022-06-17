import {Component, Input} from "@angular/core";
import {ITable} from "../interfaces/assigment2.interface";


@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html'
})
export class Assigment2Component{
  @Input()
  table!: ITable;
}
