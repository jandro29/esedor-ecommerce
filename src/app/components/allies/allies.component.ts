import { Component, OnInit } from '@angular/core';
import { Ally } from '../../ally';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.scss']
})
export class AlliesComponent implements OnInit {

  imagePath: String = 'assets/images/'

  allies:Ally[] = [
    new Ally('Niubiz','niubiz.svg'),
    new Ally('Toulou', 'toulou.svg'),
    new Ally('CCL', 'ccl.svg'),
    new Ally('Urbaner', 'urbaner.svg'),
    new Ally('MapIt', 'map-it.svg'),
    new Ally('infomatica', 'infomatica.svg' ),
    new Ally('Svitzer', 'svitzer.svg' ),
    new Ally('dohwa', 'dohwa.svg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
