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
    { imgSrc: '../../assets/img/faces/python.png', name: 'Python', category: 'Informatique', description: 'Description Python ici Description Python ici Description Python ici Description Python ici', value: 120 },
    { imgSrc: '../../assets/img/faces/js.png', name: 'JavaScript', category: 'Informatique', description: 'Description JavaScript ici Description JavaScript ici Description JavaScript ici Description JavaScript ici', value: 130 },
    { imgSrc: '../../assets/img/faces/csharp.png', name: 'C#', category: 'Informatique', description: 'Description C# ici Description C# ici Description C# ici Description C# ici', value: 140 },
    { imgSrc: '../../assets/img/faces/html.png', name: 'HTML', category: 'Web', description: 'Description HTML ici Description HTML ici Description HTML ici Description HTML ici', value: 110 },
    { imgSrc: '../../assets/img/faces/css.png', name: 'CSS', category: 'Web', description: 'Description CSS ici Description CSS ici Description CSS ici Description CSS ici', value: 100 },
    { imgSrc: '../../assets/img/faces/react.png', name: 'React', category: 'Web', description: 'Description React ici Description React ici Description React ici Description React ici', value: 160 },
    { imgSrc: '../../assets/img/faces/angular.png', name: 'Angular', category: 'Web', description: 'Description Angular ici Description Angular ici Description Angular ici Description Angular ici', value: 170 },
    { imgSrc: '../../assets/img/faces/php.png', name: 'PHP', category: 'Web', description: 'Description PHP ici Description PHP ici Description PHP ici Description PHP ici', value: 130 },
    { imgSrc: '../../assets/img/faces/flutter.png', name: 'Flutter', category: 'Mobile', description: 'Description Flutter ici Description Flutter ici Description Flutter ici Description Flutter ici', value: 180 },
    { imgSrc: '../../assets/img/faces/swift.png', name: 'Swift', category: 'Mobile', description: 'Description Swift ici Description Swift ici Description Swift ici Description Swift ici', value: 140 },
    { imgSrc: '../../assets/img/faces/kotlin.png', name: 'Kotlin', category: 'Mobile', description: 'Description Kotlin ici Description Kotlin ici Description Kotlin ici Description Kotlin ici', value: 150 },
    { imgSrc: '../../assets/img/faces/nodejs.png', name: 'Node.js', category: 'Backend', description: 'Description Node.js ici Description Node.js ici Description Node.js ici Description Node.js ici', value: 160 },
    { imgSrc: '../../assets/img/faces/mongodb.png', name: 'MongoDB', category: 'Backend', description: 'Description MongoDB ici Description MongoDB ici Description MongoDB ici Description MongoDB ici', value: 170 },
    { imgSrc: '../../assets/img/faces/sql.png', name: 'SQL', category: 'Backend', description: 'Description SQL ici Description SQL ici Description SQL ici Description SQL ici', value: 120 },
    { imgSrc: '../../assets/img/faces/docker.png', name: 'Docker', category: 'DevOps', description: 'Description Docker ici Description Docker ici Description Docker ici Description Docker ici', value: 140 },
    { imgSrc: '../../assets/img/faces/kubernetes.png', name: 'Kubernetes', category: 'DevOps', description: 'Description Kubernetes ici Description Kubernetes ici Description Kubernetes ici Description Kubernetes ici', value: 150 },
    { imgSrc: '../../assets/img/faces/aws.png', name: 'AWS', category: 'Cloud', description: 'Description AWS ici Description AWS ici Description AWS ici Description AWS ici', value: 180 },
    { imgSrc: '../../assets/img/faces/azure.png', name: 'Azure', category: 'Cloud', description: 'Description Azure ici Description Azure ici Description Azure ici Description Azure ici', value: 170 },
    { imgSrc: '../../assets/img/faces/git.png', name: 'Git', category: 'Version Control', description: 'Description Git ici Description Git ici Description Git ici Description Git ici', value: 110 },
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
