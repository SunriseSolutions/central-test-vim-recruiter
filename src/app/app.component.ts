import { Component, ElementRef, Inject } from '@angular/core';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employerCode: string;
  candidateCode: string;
  settings: AppSettings;

  constructor(private elementRef: ElementRef) {
    this.employerCode = this.elementRef.nativeElement.getAttribute('employerCode');
    this.candidateCode = this.elementRef.nativeElement.getAttribute('candidateCode');
    this.settings  = new AppSettings();
  }
}
