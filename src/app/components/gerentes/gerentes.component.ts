import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gerentes',
  templateUrl: './gerentes.component.html',
  styleUrls: ['./gerentes.component.scss']
})
export class GerentesComponent implements OnInit {

   instructores = [
    {
      nombre: 'Mijalys Silva',
      descripcion:
        'Más de 10 años trabajando con marcas líderes en Latinoamérica como Primax, Ripley, Niubiz y Redeban. Seleccionado por Google for Startups, combina la experiencia en ventas, branding, IA y UX para crear experiencias de aprendizaje efectivas.',
      foto: 'assets/mijalys.jpg',
      },
    {
      nombre: 'Jairo Cavalie',
      descripcion:
        'Socio y gerente en Esedor LatAm | Profesor y especialista en transformación y estrategia digital, e-commerce y análisis de datos | MBA.',
      foto: 'assets/jairo.jpg',
      },
  ];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: { clickable: true },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
