import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Session } from '../../services/session';

@Component({
  selector: 'app-voting-session-component',
  imports: [FormsModule],
  templateUrl: './voting-session-component.html',
  styleUrl: './voting-session-component.css',
})
export class VotingSessionComponent {
  
  sessionCode = '';
  name = '';
  id: number | null = null;

  constructor(public session: Session) {}

  userName(): string {
    this.name = this.session.userName();
    return this.name;
  }

  userId(): number | null {
    this.id = this.session.userId();
    return this.id;
  }

  sair(): void {
    this.session.sair();
  }

  onLogout(): void {
    // TODO: implementar logout
    this.sair();
  }

  onCreateSession(): void {
    console.log(this.userName());
  }

  onJoinSession(): void {
    // TODO: implementar entrada em sessão
  }
}
