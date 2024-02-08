import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private baseUrl = 'http://localhost:8080/task';

  constructor(private http: HttpClient) { }

  saveTask(task: Task): Observable<any> {
    return this.http.post(`${this.baseUrl}`, task);
  }

  updateTask(task: Task, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, task);
  }

  listAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
