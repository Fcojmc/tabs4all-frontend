import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();

  isLogged!: boolean;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }

  logout(route: string) {
    this.authService.logout();
    this.router.navigate([`/${route}`]);
  }
}
