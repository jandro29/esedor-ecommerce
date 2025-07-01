import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.scss']
})
export class ComercioComponent implements OnInit {

   public config: SwiperConfigInterface = {
      slidesPerView: 'auto',
      navigation: false,
      pagination: false
    };

  services = [
    {
      title: 'Automatiza',
      description: 'Ahorra tiempo conectando procesos de forma funcional y eficaz de forma automática.'
    },
    {
      title: 'Escala',
      description: 'Haz crecer tu negocio sin límites gracias a procesos optimizados.'
    },
    {
      title: 'Optimiza',
      description: 'Mejora cada parte de tu tienda para obtener mejores resultados.'
    },
    {
      title: 'Controla',
      description: 'Toma decisiones inteligentes con métricas en tiempo real.'
    }
  ];


  constructor() {}

  ngOnInit(): void {}
}
