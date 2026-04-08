import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session } from '../../services/session';

@Component({
  selector: 'app-login-form-component',
  imports: [FormsModule],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css',
})
export class LoginFormComponent {

  userName = signal('');

  constructor(private session: Session) {
    
  }

  onSubmit(): void {
    if (this.userName()) {
      this.session.setUserName(this.userName());
      this.session.setUserId(1);
    }
  }

}
