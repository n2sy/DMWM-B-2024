import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input({ required: true }) prenom = 'Ahmed';

  @Output() msgToParent = new EventEmitter();

  sendMsg() {
    this.msgToParent.emit('Message de la part du Child');
  }
}
