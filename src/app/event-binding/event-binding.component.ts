import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: false,
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  printMsg(event: any)
  {
    console.log("Hello from typescript")
    console.log(event)
  }
}
