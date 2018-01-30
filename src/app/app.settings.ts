import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {     

  public getSetting(key:string): string {
    return environment[key];    
  }

// ...
}