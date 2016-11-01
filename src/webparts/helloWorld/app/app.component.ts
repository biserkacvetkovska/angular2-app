import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    {{description}}

    <input type="text" />
  `
})
export class AppComponent {
  description: string = "Hello there! Enter your name:"
}
