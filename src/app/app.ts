import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Session } from './services/session';
import { LoginFormComponent } from './components/login-form-component/login-form-component';
import { VotingSessionComponent } from './components/voting-session-component/voting-session-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginFormComponent, VotingSessionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public session: Session) {}

  get loading() {
    return this.session.loading;
  }

  get userName() {
    return this.session.userName;
  }

  get userId() {
    return this.session.userId;
  }
}

