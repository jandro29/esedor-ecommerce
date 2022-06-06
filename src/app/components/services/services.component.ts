import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: object[];

  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    navigation: false,
    pagination: false
  }

  constructor() {
    this.services = [];
    this.services.push({
    title: 'Experiencia de usuario(UX)',
    description: 'Atiende mejor a tu cliente en todo el recorrido de la compra con un enfoque omnicanal y crece tu funnel '
    })
    this.services.push({
    title: 'Branding y fotografía',
    description: 'Crea una identidad de marca memorable, potencia tu negocio con una estrategia de marca y una dirección de arte.'
    })
    this.services.push({
    title: 'Google ADS y social media',
    description: 'Vende por internet de forma inteligente e incrementa tu funnel de ventas llegando a más personas de forma estratégica.'
    })
    this.services.push({
    title: 'Programación  a medida',
    description: 'Crece con tu modelo de negocio digital por completo en una plataforma personalizada y escalable.'
    })
    this.services.push({
    title: 'Programación de código abierto',
    description: 'Inicia de manera simple y económica  tu tienda virtual con WooCommerce, Magento, Prestashop, Shopify, WordPress.'
    })
    this.services.push({
    title: 'Programación de aplicación móvil',
    description: 'Lleva tu modelo de negocio al siguiente nivel desarrollando tu nueva app para iOS y Android.'
    })
  }

  ngOnInit(): void {
  }

}
