import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../Helpers/User';
import { RolesModalComponent } from '../roles-modal/roles-modal.component';
import { BsModalService, BsModalRef } from '../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users:User[];
  bsModalRef:BsModalRef;

  constructor(private adminService:AdminService,private modalService: BsModalService) { }

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
  editRolesModal(){
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    //this.modalService.
    this.modalService.show(RolesModalComponent,{initialState});
    //this.bsModalRef.content.closeBtnName = 'Close';
  }
}
