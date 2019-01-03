import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../Helpers/User';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users:User[];

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getUsersWithRoles();
  }
  getUsersWithRoles(){
    this.adminService.getUsersWithRoles()
    .subscribe((res)=>
    {
      this.users=res;
    });
  }
}
