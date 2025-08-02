import { Component } from '@angular/core';
import { SimpleTableComponent } from '../../shared/components/simple-table/simple-table.component';
import { UserDataService } from '../../shared/services/userdata.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [SimpleTableComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  constructor(public userdata: UserDataService) {}
  
}

interface IUser {
  // f: string
  // i: string
  // o: string
  login: string
  rights: string
}