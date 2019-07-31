import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {

  @Input() checked: boolean;
  @Input() disabled = false;
  @Output() check = new EventEmitter<boolean>();

  constructor() { }

  toggleChecked() {
    this.check.emit(!this.checked);
  }
}
