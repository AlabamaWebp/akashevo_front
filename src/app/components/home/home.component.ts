import { Component } from '@angular/core';
import { UserDataService } from '../../shared/services/userdata.service';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { ModeratorComponent } from '../moderator/moderator.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdminPanelComponent, ModeratorComponent, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private userdata: UserDataService) { }
  cur_interface = this.userdata.right;

}
