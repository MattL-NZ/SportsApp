import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {a
  user: User;
  model: any = {}
  openDropdown: boolean = false;

  constructor(
    public accountService: AccountService, 
    private router: Router, 
    private toastr: ToastrService
  ) { }

    ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe(response => {
      // Navigate the user to the members/matches component
      this.router.navigateByUrl("/members");
    }, error => {
      console.log(error);
      this.toastr.error(error.error, "Error when logging in")
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
