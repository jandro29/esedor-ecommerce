import { Component, OnInit } from '@angular/core';
import { Ally } from '../../ally';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.scss']
})
export class AlliesComponent implements OnInit {

  imagePath: String = 'assets/images/allies/'

  allies:Ally[] = [
    new Ally('DOHWA','dohwa.png'),
    new Ally('Egemsa', 'egemsa.png'),
    new Ally('Ford', 'ford.png'),
    new Ally('Infomática', 'infomatica.png'),
    new Ally('Map It', 'mapit.png'),
    new Ally('Niubiz', 'niubiz.png' ),
    new Ally('PickApp', 'pickapp.png' ),
    new Ally('Svitzer', 'svitzer.png' ),
    new Ally('Toulouse Lautrec', 'toulouse.png')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
