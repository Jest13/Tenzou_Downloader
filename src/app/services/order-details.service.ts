import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  DownloadDetails = [
    {
      id: 1,
      DownloadName:"Riser 009s",
      DownloadDetails:"avec 4 condensateurs anti-explosion, rendant l'alimentation graphique plus stable et sécurisée. Résistance stable, rend les données plus stables et sûres",
      DownloadLink:"10",
      DownloadImg:"https://image.noelshack.com/fichiers/2021/45/7/1636917765-riser.png",
    },
    {
      id: 2,
      DownloadName:"Alimentation 1800W - 2000W ",
      DownloadDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      DownloadLink:"250",
      DownloadImg:"https://image.noelshack.com/fichiers/2021/46/4/1637222009-alimentation.png",
    }
  ]

}
