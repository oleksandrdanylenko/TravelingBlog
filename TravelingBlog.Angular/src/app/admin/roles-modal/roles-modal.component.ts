import { Component, OnInit } from '@angular/core';
import { BsModalRef } from '../../../../node_modules/ngx-bootstrap';


@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.scss']
})
export class RolesModalComponent implements OnInit {

  
  closeBtnName: string;
  list: any[] = [];
  title: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
