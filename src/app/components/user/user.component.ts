import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDataService } from '../../shared/services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(
    public user: UserDataService, private router: Router) {}

    goTo(s: string) {
      this.router.navigate([s]);
    }
}
