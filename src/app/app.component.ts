import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello Angular Developer Application';
  firstName: string = '';
  lastName: string = '';

  onDeveloperRegistered(developer: { firstName: string, lastName: string }) {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }
}
