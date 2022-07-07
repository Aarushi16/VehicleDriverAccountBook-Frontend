import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handelLogout() {
    localStorage.clear();
    sessionStorage.clear();
    this.clearCookie();
    window.location.href = '/signup';

  }

  clearCookie = () => {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c.replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date()
          .toUTCString() + ";path=/");
    });
  }

}
