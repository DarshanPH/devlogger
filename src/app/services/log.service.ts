import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { observable } from 'rxjs';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: '',
    text: '',
    date: '',
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'first message', date: new Date('16/09/2021') },
      { id: '2', text: 'first message', date: new Date('16/09/2021') },
      { id: '3', text: 'first message', date: new Date('16/09/2021') },
    ];
  }

  getLogs() {
    return this.logs;
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    console.log('clicked');
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
  }


}
