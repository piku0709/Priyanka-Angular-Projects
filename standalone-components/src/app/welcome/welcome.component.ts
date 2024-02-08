import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone: true, //default is false
  imports: [DetailsComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
