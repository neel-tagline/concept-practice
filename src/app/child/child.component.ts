import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() options: any;
  @Input() feedBack: any;

  @Output() answer = new EventEmitter<string>();
  onAnswer(event: any) {
    this.answer.emit(event.target.value);
  }
  constructor() {

  }
}
