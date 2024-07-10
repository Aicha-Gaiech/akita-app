import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {

  }
  login() {
    this.auth.loginWithRedirect()
  }
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  }
}
