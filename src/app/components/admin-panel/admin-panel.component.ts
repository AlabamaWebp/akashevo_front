import { Component } from '@angular/core';
import { SimpleTableComponent } from '../../shared/components/simple-table/simple-table.component';
import { UserDataService } from '../../shared/services/userdata.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCreateEditComponent } from './admin-create-edit/admin-create-edit.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [SimpleTableComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  constructor(public userdata: UserDataService, private dialog: MatDialog) {}
  ngOnInit() {
    this.rights = [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
      { id: 4, name: '4' },
    ];
  }
  rights!: IRight[];

  createEdit() {
    this.dialog
      .open(AdminCreateEditComponent, { data: {} })
      .afterClosed()
      .subscribe((e) => {
        console.log(e);
      });
  }
}

export interface IUser {
  f: string;
  i: string;
  o: string;
  login: string;
  rights: string;
}
export interface IUserCreate {
  f?: string;
  i?: string;
  o?: string;
  login?: string;
  rights?: string;
}
export interface IRight {
  id: number;
  name: string;
}
