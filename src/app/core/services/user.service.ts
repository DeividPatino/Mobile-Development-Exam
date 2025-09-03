import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { email: 'jane@doe.com', password: '1234567890' }
  ];

  login(email: string, password: string): Observable<any> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return of({ success: true, user });
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }
}
