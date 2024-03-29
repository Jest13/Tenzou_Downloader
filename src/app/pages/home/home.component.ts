import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from "../../services/order-details.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  downloadData:any;
  ngOnInit(): void {
    this.downloadData = this.service.DownloadDetails;
  }

}

