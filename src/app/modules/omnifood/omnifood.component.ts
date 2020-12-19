import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-omnifood',
  templateUrl: './omnifood.component.html',
  styleUrls: ['./omnifood.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class OmnifoodComponent {
}
