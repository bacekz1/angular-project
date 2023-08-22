import {Injectable} from '@angular/core';
import {Task} from "../Task";
import {MockTask} from "../mock-task";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task[]>{
    return of(MockTask);
  }
}
