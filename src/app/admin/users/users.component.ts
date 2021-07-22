import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormResetService} from '../../form-reset.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = new Array<User>();
  selectedUser: User;
  action: string;
  loadingData = true;
  message = 'Please waite the data is loading';

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private formResetService: FormResetService) {
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(next => {
      this.users = next;
      this.loadingData = false;
      this.route.queryParams.subscribe(
        (params) => {
          const id = params['id'];
          this.action = params['action'];
          if (id) {
            this.selectedUser = this.users.find((user) => user.id === +id);
          }
        },
        error => {
          this.message = 'The errors occurred, please contact with support';
        }
      );
    });

  }

  setUser(id: number) {
    this.router.navigate(['admin', 'users'], {queryParams: {id, action: 'view'}});
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], {queryParams: {action: 'add'}});
    this.formResetService.resetUserFormEvent.emit(this.selectedUser);
  }
}
