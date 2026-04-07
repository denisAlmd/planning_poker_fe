import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Session } from '../services/session';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor(public session: Session) {

  }

  testCreateSession(): void {
    this.session.createSession('Test Host').subscribe({
      next: (response) => {
        console.log('Session created:', response);
      },
      error: (error) => {
        console.error('Error creating session:', error);
      }
    });
  }

  testDeleteAllSessions(): void {
    this.session.deleteAllSessions().subscribe({
      next: (response) => {
        console.log('All sessions deleted:', response);
      },
      error: (error) => {
        console.error('Error deleting sessions:', error);
      }
    });
}
}
