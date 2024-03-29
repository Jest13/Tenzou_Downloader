import { Component, OnInit } from '@angular/core';
import {OrderDetailsService} from "../../services/order-details.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  downloadData:any;
  ngOnInit(): void {
  this.downloadData = this.service.DownloadDetails
  }


}
