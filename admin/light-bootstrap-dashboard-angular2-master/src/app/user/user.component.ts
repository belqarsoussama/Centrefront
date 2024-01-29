import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  visible: boolean = true;
  visible1: boolean = true;
  data1 = [
    { imgSrc: '../../assets/img/faces/java.png', name: 'JAVA V2', category: 'Informatique', description: 'Description ici Description ici Description ici Description ici', value: 150 },
    // Ajoutez d'autres entrées de données selon vos besoins
  ];
  selected: any;

  constructor() { }

  ngOnInit() {
  }

    messeance() {
      this.visible = !this.visible;
    }

    Rating() {
      this.visible1 = !this.visible1;
    }
}
