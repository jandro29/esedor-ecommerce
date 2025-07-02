import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {


  public config: SwiperConfigInterface = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  testimonios = [
    {
      text: 'Gracias a Esedor LatAm, transformamos nuestra tienda online con una solución omnicanal que nos permitió aumentar nuestras ventas a S/ 375k mensuales. Ahora, gestionamos nuestras operaciones de forma más eficiente, mejorando la experiencia del cliente y escalando rápidamente.',
      name: 'Jhan Flores M.',
      role: 'Gerente de E-commerce, PIEERS'
    },
    {
      text: 'Al trabajar con ellos, conseguimos mejorar significativamente la experiencia de compra en línea, lo que nos permitió aumentar la conversión de nuevos clientes en un 35% y reducir la tasa de abandono de carritos en un 45%. Estos logros nos llevaron a alcanzar S/ 600k en facturación en nuestro primer año tras el relanzamiento.',
      name: 'Frank de la Cruz',
      role: 'Jefe de Marketing y E-commerce, Ecoprana'
    },
    {
      text: 'Mejoramos significativamente la experiencia de compra en línea, logrando un 25% de aumento en la tasa de conversión de ventas y un 60% en la velocidad de navegación móvil. Gracias a estas mejoras, nuestro sitio se volvió mucho más eficiente y retuvo más clientes.',
      name: 'Juana Quiroga',
      role: 'Gerente de Experiencia al Cliente, Ripley.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
