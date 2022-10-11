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
      DownloadSite:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadLink32:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadLink64:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadImg:"https://image.noelshack.com/fichiers/2022/35/3/1661982681-lubuntu-logo.png",
    },
    {
      id: 2,
      DownloadName:"Xubuntu",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadSite:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadLink32:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadLink64:"https://cdimage.ubuntu.com/lubuntu/releases/20.04.4/release/lubuntu-20.04.4-desktop-amd64.iso",
      DownloadImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Xubuntu_logo.svg/1200px-Xubuntu_logo.svg.png",
    },
    {
      id: 3,
      DownloadName:"Ubuntu",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadLink:"250",
      DownloadImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ubuntu-logo-2022.svg/2560px-Ubuntu-logo-2022.svg.png",
    },
    {
      id: 4,
      DownloadName:"Kubuntu",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadLink:"250",
      DownloadImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Kubuntu_logo_and_wordmark_-_old.svg/1200px-Kubuntu_logo_and_wordmark_-_old.svg.png",
    }
  ]

}
