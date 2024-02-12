import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(data: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, data).pipe(
      tap(response => {
        if (response && response.token) {
          this.tokenService.setToken(response.token);
        }
      })
    );
  }
}
