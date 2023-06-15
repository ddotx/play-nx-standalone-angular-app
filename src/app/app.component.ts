import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UiComponent } from '@myngapp/shared/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent],
  selector: 'myngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myngapp';
}
