import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroments';

export interface CreateSessionResponse {
  id: string;
  host_name: string;
}

export interface DeleteAllSessionsResponse {
  deleted: boolean;
  count?: number;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Session {
  
  constructor(private http: HttpClient) {
    this.loadUserNameAndUserIdFromLocalStorage();
  }

  private loadUserNameAndUserIdFromLocalStorage(): void{
  const storedUserName = localStorage.getItem('userName');
  const storedUserId = localStorage.getItem('userId');

  const userId = storedUserId ? Number(storedUserId) : null;
  const userName = storedUserName ?? null;

  if (userId !== null) this.userId.set(userId);
  if (userName) this.userName.set(userName);
  }

  saveUserNameAndUserIdToLocalStorage(): void {
    const userName = this.userName();
    const userId = this.userId();
    
    if (userName) {
      localStorage.setItem('userName', userName);
    }
    if (userId !== null) {
      localStorage.setItem('userId', userId.toString());
    }
  }

  sair(): void {
    this.setUserName('');
    this.setUserId(null);
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }

  userName = signal<string>('');
  userId = signal<number | null>(null);
  loading = signal<boolean>(false);

  setUserName(value: string): void {
    this.userName.set(value);
    this.saveUserNameAndUserIdToLocalStorage();
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setUserId(value: number | null): void {
    this.userId.set(value);
    this.saveUserNameAndUserIdToLocalStorage();
  }  

  createSession(host_name: string): Observable<CreateSessionResponse> {
    const body: { host_nome: string } = { host_nome: host_name };
    return this.http.post<CreateSessionResponse>(`${environment.apiUrl}sessoes/`, body);
  }

  deleteAllSessions(): Observable<DeleteAllSessionsResponse> {
    return this.http.delete<DeleteAllSessionsResponse>(`${environment.apiUrl}sessoes/all`);
  }
}
