import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLogged!: boolean;
  @Output() sidenavToggle = new EventEmitter();

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }

  logout() {
    this.isLogged = false;
    this.authService.logout();
  }

  info() {
    this.authService.isAdmin()
      .subscribe(res => console.log(res));
  }
}
