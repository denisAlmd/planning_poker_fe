import { Component } from '@angular/core';
import { Session } from '../../services/session';

@Component({
  selector: 'app-voting-session-component',
  imports: [],
  templateUrl: './voting-session-component.html',
  styleUrl: './voting-session-component.css',
})
export class VotingSessionComponent {

  constructor(public session: Session) {}

  get userName() {
    return this.session.userName;
  }

  get userId() {
    return this.session.userId;
  }

  sair(): void {
    this.session.setUserName('');
    this.session.userId.set(null);
  }


}
