import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  
  @Input() task!: Task;
  @Input() assignees: any;
  @Output() newUpdateEvent = new EventEmitter<Task>();
  
  constructor() { }

  ngOnInit(): void {
  }

  checkOptionSelected() {
    if(this.task.answer != "")
      this.task.done = true;   
    else
     this.task.done = false;
  }

  setNumericAnswer(e: any):void {  
    this.task.answer = e.target.value;
    this.task.done = true;   
  }

  updateTask(changes: any) {
    
    let t: Task = { 
      no: this.task.no,
      answer: this.task.answer,
      done: this.task.done
    };

    Object.assign(t, changes);
    this.newUpdateEvent.emit(t);
  }

}
