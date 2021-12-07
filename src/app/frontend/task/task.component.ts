import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task} from '../../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  
  @Input() task!: Task;
  @Output() newUpdateEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  updateTask(changes: any) {
    
    let t: Task = { no: this.task.no }; 

    Object.assign(t, changes);
    this.newUpdateEvent.emit(t);
  }

  

}
