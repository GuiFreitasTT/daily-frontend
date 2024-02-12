import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { TokenService } from './token-service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private baseUrl = 'http://localhost:8080/task';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  saveTask(task: Task): Observable<any> {
    const headers = this.headerToken();
    return this.http.post(`${this.baseUrl}`, task, { headers });
  }

  updateTask(task: Task, id: number): Observable<any> {
    const headers = this.headerToken();
    return this.http.put(`${this.baseUrl}/${id}`, task, { headers });
  }

  listAll(): Observable<any> {
    const headers = this.headerToken();
    return this.http.get(`${this.baseUrl}`, { headers });
  }

  delete(id: number): Observable<any>{
    const headers = this.headerToken();
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }

  private headerToken() {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }
}
