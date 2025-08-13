import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
  WritableSignal,
} from "@angular/core";
import {
  SimpleTable,
  SimpleTableComponent,
} from "../../shared/components/simple-table/simple-table.component";
import { UserDataService } from "../../shared/services/userdata.service";
import { MatDialog } from "@angular/material/dialog";
import { AdminCreateEditComponent } from "./admin-create-edit/admin-create-edit.component";
import { HttpService } from "../../shared/services/http.service";

@Component({
  selector: "app-admin-panel",
  standalone: true,
  imports: [SimpleTableComponent],
  templateUrl: "./admin-panel.component.html",
  styleUrl: "./admin-panel.component.scss",
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelComponent {
  constructor(
    public userdata: UserDataService,
    private dialog: MatDialog,
    private http: HttpService,
    private cdr: ChangeDetectorRef
  ) {}
  rucols = {
    surname: "Фамилия",
    name: "Имя",
    patronymic: "Отчество",
    role_name: "Роль",
  };
  table_data: WritableSignal<IUser[]> = signal([]);
  data: SimpleTable = new SimpleTable(
    Object.keys(this.rucols),
    this.rucols,
    this.table_data
  );
  ngOnInit() {
    this.rights = [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
    ];
    this.fetchData();
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
  fetchData() {
    this.http.get("users/?skip=0&limit=100").subscribe((e: any) => {
      console.log(e);
      this.table_data.set(e);
      this.cdr.detectChanges();
    });
  }
}

export interface IUser {
  surname: string;
  name: string;
  patronymic: string;
  role_name: string;
  role_id: number;
  id: number;
  login: string;
}
export interface IUserCreate {
  surname?: string;
  name?: string;
  patronymic?: string;
  role_name?: number;
  login?: string;
}
export interface IRight {
  id: number;
  name: string;
}
