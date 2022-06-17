import {Component} from "@angular/core";
import {ITable} from "../interfaces/assigment2.interface";

@Component({
  selector: 'app-assigment2s',
  templateUrl: './assigment2s.component.html'
})
export class Assigment2sComponent {
  data: ITable[] = [
    {task: 'Task 1', taskContent: 'Analyze the new requirements gathered from the customer'},
    {task: 'Task 3', taskContent: 'Arrange a web meeting with the customer to get new requirements'},
    {task: 'Task 10', taskContent: 'Show the retrieved data from the server in grid control'},



  ];
}
