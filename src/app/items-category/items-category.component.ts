import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-items-category',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './items-category.component.html',
  styleUrls: ['./items-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsCategoryComponent {
  @Input() property1 = "Default";
}
