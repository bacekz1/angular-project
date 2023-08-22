import {Component} from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  mockTask: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((mockTasks) => this.mockTask = mockTasks); //wtf is this sheet
  }
}
