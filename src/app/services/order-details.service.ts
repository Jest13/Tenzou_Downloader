import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  DownloadDetails = [
    {
      id: 1,
      DownloadName:"Lubuntu",
      DownloadDetails:"Lubuntu is a lightweight Linux distribution based on Ubuntu and uses the LXQt desktop environment in place of Ubuntu's GNOME desktop",
      DownloadLink:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadImg:"https://image.noelshack.com/fichiers/2022/35/3/1661982681-lubuntu-logo.png",
    },
    {
      id: 2,
      DownloadName:"Alimentation 1800W - 2000W ",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadLink:"250",
      DownloadImg:"https://image.noelshack.com/fichiers/2021/46/4/1637222009-alimentation.png",
    },
    {
      id: 3,
      DownloadName:"Alimentation 1800W - 2000W ",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadLink:"250",
      DownloadImg:"https://image.noelshack.com/fichiers/2021/46/4/1637222009-alimentation.png",
    },
    {
      id: 4,
      DownloadName:"Alimentation 1800W - 2000W ",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadLink:"250",
      DownloadImg:"https://image.noelshack.com/fichiers/2021/46/4/1637222009-alimentation.png",
    }
  ]

}
