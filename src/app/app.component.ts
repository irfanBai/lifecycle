import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle';
  inputText : string = '';

  OnSubmit(InputEL: HTMLInputElement) {
    this.inputText = InputEL.value;
  }
}
