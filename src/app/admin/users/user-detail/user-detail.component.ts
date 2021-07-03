import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
  }

  editUser() {
    this.router.navigate(['admin', 'users'], {queryParams: {action: 'edit', id: this.user.id}});
  }

  deleteUser() {
    this.dataService.deleteUser(this.user.id).subscribe(
      next => {
        this.router.navigate(['admin', 'users']);
      }
    );
  }

  resetPassword() {
    this.dataService.resetPassword(this.user.id).subscribe();
  }
}
