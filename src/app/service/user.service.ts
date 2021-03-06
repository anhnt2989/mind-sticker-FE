import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  authenticate(user): Observable<any> {
    return this.http.post<any>(this.API_URL, user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  signout() {
    window.localStorage.clear();
    window.location.replace('api/auth/signin');
  }
}
