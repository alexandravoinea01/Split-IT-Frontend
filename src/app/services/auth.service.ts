import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  private readonly baseUrl = 'https://localhost:5001/api/Authentication';
  _authNavStatusSource = new BehaviorSubject(false);
  loggedIn = false;

  constructor(
    private http: HttpClient
  ) {
  }

  register(email: string, password: string) {
    let body = JSON.stringify({email, password});
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseUrl + "/sign-up", body,{headers}).pipe(
      map(() => true));
  }

  login(email: any, password: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      this.baseUrl + "/login",
      JSON.stringify({email, password}), {headers}).pipe(
        tap(res => console.log(res)),
      map(res => {
        // localStorage.setItem('auth_token', res.auth_token);
        console.log(res)
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true
      }));
  }
}
