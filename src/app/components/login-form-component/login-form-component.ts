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
  message = signal<string>('');

  constructor(private session: Session) {
    
  }

onChangeUserName(value: string): void {

  const regex = /[^a-zA-Z_]/g;

  if (regex.test(value)) {
    this.message.set('Only letters and underscores are allowed in the username.');
    return;
  }

  this.message.set('');
  this.userName.set(value);
}

  onSubmit(): void {

    if (!this.userName()) {
      this.message.set('Please enter a username.');
      return;
    }

    this.session.setUserName(this.userName().trim());    
  }

}
