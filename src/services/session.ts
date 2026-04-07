import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) {}

  createSession(host_name: string): Observable<CreateSessionResponse> {
    const body: { host_name: string } = { host_name };
    return this.http.post<CreateSessionResponse>(`${environment.apiUrl}sessoes`, body);
  }

  deleteAllSessions(): Observable<DeleteAllSessionsResponse> {
    return this.http.delete<DeleteAllSessionsResponse>(`${environment.apiUrl}sessoes`);
  }
}
