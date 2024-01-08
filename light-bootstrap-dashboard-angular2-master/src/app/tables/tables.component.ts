import { Component, OnInit } from '@angular/core';
// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    data = [
        { imgSrc: '../../assets/img/faces/java.png', name: 'JAVA V2', category: 'Informatique', description: 'Description ici Description ici Description ici Description ici', value: 150 },
        // Ajoutez d'autres entrées de données selon vos besoins
    ];


  constructor() { }

  ngOnInit() {

      initMDB({ Ripple });
  }

    confirmReservation() {
        const isConfirmed = window.confirm('Êtes-vous sûr de réserver la séance ?');
        if (isConfirmed) {
            // Ajoutez ici la logique à exécuter si la réservation est confirmée
            alert('La séance a été réservée avec succès.');
        } else {
            // Ajoutez ici la logique à exécuter si la réservation est annulée
            alert('La réservation de la séance a été annulée.');
        }
    }
}
