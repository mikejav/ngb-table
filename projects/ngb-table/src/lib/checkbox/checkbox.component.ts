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
  @Output() checkChange = new EventEmitter<boolean>();

  constructor() { }

  toggleChecked() {
    this.checkChange.emit(!this.checked);
  }
}
