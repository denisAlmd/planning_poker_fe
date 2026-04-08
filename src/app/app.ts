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

  message = signal('');
  loading = signal(false);

  testCreateSession(): void {
    this.loading.set(true);
    this.session.createSession('Denis').subscribe({
      next: (response) => {
        this.message.set(`Session created with ID: ${response.id} for host: ${response.host_name}`);
        console.log('Session created:', response);
        this.loading.set(false);
      },
      error: (error) => {
        this.message.set(`Error creating session: ${error?.message || error}`);
        console.error('Error creating session:', error);
        this.loading.set(false);
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
