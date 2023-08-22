import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() text!: string; // ! mean not null
  @Input() color!: string;
  @Output() btnOnclick = new EventEmitter();
  onClick(){
    this.btnOnclick.emit();
  }
}
