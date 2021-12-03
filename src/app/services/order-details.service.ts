import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  minerDetails = [
    {
      id: 1,
      miningName:"Riser 009s",
      miningDetails:"avec 4 condensateurs anti-explosion, rendant l'alimentation graphique plus stable et sécurisée. Résistance stable, rend les données plus stables et sûres",
      miningPrice:"10",
      miningImg:"https://image.noelshack.com/fichiers/2021/45/7/1636917765-riser.png",
    },
    {
      id: 2,
      miningName:"Alimentation 1800W - 2000W ",
      miningDetails:"Forte dissipation de la chaleur, haute efficacité et économie d'énergie, protection contre l'humidité,",
      miningPrice:"250",
      miningImg:"https://image.noelshack.com/fichiers/2021/46/4/1637222009-alimentation.png",
    }
  ]

}
