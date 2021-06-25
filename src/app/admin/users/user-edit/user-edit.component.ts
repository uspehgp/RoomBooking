import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {DataService} from '../../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user: User;
  formUser: User;
  message: string;

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.formUser = Object.assign({}, this.user);
  }

  onSubmit() {
    // console.log('we need to save user', this.user);
    this.dataService.updateUser(this.formUser).subscribe(
      user => {
        this.router.navigate(['admin', 'users'], {queryParams: {action: 'view', id: user.id}});
      }
    );
  }
}
