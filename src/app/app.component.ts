import {Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employerCode: string;
  candidateCode: string;
  
  constructor(private elementRef:ElementRef) {
    this.employerCode = this.elementRef.nativeElement.getAttribute('employerCode');
    this.candidateCode = this.elementRef.nativeElement.getAttribute('candidateCode');
}

}
