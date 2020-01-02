import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  login(payload: {username: string, password: string}) {
    if (payload.username === 'demo' && payload.password === 'demo') {
      localStorage.setItem('authStatus', String(true));
      this.router.navigate(['/dashboard']);
      return;
    }
    this.snackBar.open(
      'Invalid login credentials',
      'Close',
      {
        duration: 5000
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!JSON.parse(localStorage.getItem('authStatus'));
  }

}
