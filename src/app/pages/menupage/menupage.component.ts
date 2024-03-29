import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderDetailsService} from "../../services/order-details.service";

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) {
  }

  getMenuId: any;
  menuData: any;
  downloadData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if (this.getMenuId) {
      this.menuData = this.service.DownloadDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>');
    }
    this.downloadData = this.service.DownloadDetails
  }


}
