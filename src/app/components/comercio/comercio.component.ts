import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.scss']
})
export class ComercioComponent implements OnInit {

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
