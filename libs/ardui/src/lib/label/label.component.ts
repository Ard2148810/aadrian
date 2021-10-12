import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aadrian-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() text = '';
}
