import { Injectable, OnInit} from '@angular/core';
import { Ticket } from './ticket.model';
import { Task } from './task.model';
import ticketData from './balanced_data.json'
import taskData from './tasks.json'
import { BehaviorSubject, Observable } from 'rxjs';
import { LogPublishersService } from "./log-publishers.service";

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

  constructor( private logPublisherService: LogPublishersService ) { 
    this.ab = this.create_ab(this.logPublisherService.getSessionID());
    this.amountAppStates = 12;
    this.tickets = ticketData; 
    this.tasks = taskData;   
  } 

  ngOnInit():void {
  } 

  // return true if sessionID's hash value is even, false if odd
  create_ab(s: string | null ): boolean {

    if(s) {
      let hash = this.getSmallTinyHash(s);
      return (Math.round(hash) % 2  == 0) ? true : false;
    }
    else {
      console.log("No sessionID received from LogPublishersService.");
      return true;    
    }     
  }

  // create simple hash from alphanumeric string
  getSmallTinyHash(s: string): number{
    for(var i=0,h=9;i<s.length;)h=Math.imul(h^s.charCodeAt(i++),9**9);return h^h>>>9
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