import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
    console.log('LogService');
  }

  public consoleLog(log: string): void {
    console.log(log);
  }
}
