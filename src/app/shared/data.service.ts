import { Injectable, OnInit} from '@angular/core';
import { Ticket } from './ticket.model';
import { Task } from './task.model';
import ticketData from './balanced_data.json'
import taskData from './tasks.json'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  private ab: boolean;
  private amountAppStates: number;
  private appState$ = new BehaviorSubject<number>(1); // for progress bar calculation and navigation management
  private taskState$ = new BehaviorSubject<number>(1); // for navigation management upon task completion
  private tasks: Task[];
  private tickets: Ticket[];

  constructor( ) { 
    this.ab = this.create_ab();
    this.amountAppStates = 12;
    this.tickets = ticketData; 
    this.tasks = taskData;   
  } 

  ngOnInit():void {
  } 

  // creates random boolean, replace return statement by evaluating sessionID!
  create_ab(): boolean {
    return (Math.round(Math.random()) % 2  == 0) ? true : false; 
  }

  get_ab(): boolean {
    return this.ab;
  }  

  getAmountAppStates(): number {
    return this.amountAppStates;
  }

  getCurrentAppState(): number {
    return this.appState$.getValue();
  }

  getAppState(): Observable<number> {
    return this.appState$.asObservable();
  }

  setAppState(x: number): void {
    this.appState$.next(x); 
  }

  getTaskState(): Observable<number> {
    return this.taskState$.asObservable();
  }

  setTaskState(x: number): void{
    this.taskState$.next(x); 
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTasksTotal():number {
    return Object.keys(this.tasks).length;
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  updateTask( t: Task):void {   

    const i = this.tasks.findIndex(x => x.no === t.no); // task no
    let task = this.tasks[i]; 
    
    for (var key in t) {
      if(key !== 'no') {                  
          task[key] = t[key as keyof typeof task]; // type-safe recasting of the key and access it as an attribute        
      }
    } 
  }

  updateTicket( t: Ticket ):void {    

    const i = this.tickets.findIndex(x => x.index === t.index); // ticket index
    let ticket = this.tickets[i]; 

    for (var key in t) {
      if(key !== 'index') {                  
          ticket[key] = t[key as keyof typeof ticket]; // type-safe recasting of the key and access it as an attribute        
      }
    }   
  }

}