import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task} from '../../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  
  @Input() task!: Task;
  @Input() assignees: any;
  @Output() newUpdateEvent = new EventEmitter<Task>();
  taskDone: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkOptionSelected() {
    if(this.task.answer !="")
      this.taskDone = true;   
    else
     this.taskDone = false;
  }

  checkNumericAnswer(e: any):void {  

    let val = e.target.value;
    let reg = new RegExp('^[0-9]+$');

    // test if user input is number and in range [0,100] %
    if(reg.test(val) && (val >=0 && val <= 100)) {     
      this.task.answer = val;
      this.taskDone = true;         
    } else {
      this.taskDone = false;   
    }
  }

  updateTask(changes: any) {
    
    let t: Task = { no: this.task.no }; 

    Object.assign(t, changes);
    this.newUpdateEvent.emit(t);
  }

}
