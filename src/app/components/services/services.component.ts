import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  imagePath: string = 'assets/images/';
  services: { title: string, description: string, image: string }[];

  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    navigation: false,
    pagination: false
  };

  constructor() {
    this.services = [
      {
        title: 'Escala tu negocio con la tecnología de los grandes',
        description: 'No necesitas ser una gran empresa para tener una tienda online de nivel empresarial. Con nuestra solución, tendrás acceso a las mismas herramientas y tecnología que las grandes marcas, adaptadas a las necesidades de tu negocio, sin costos excesivos.',
        image: 'escala.svg'
      },
      {
        title: 'Un equipo experto en constante evolución para tu negocio',
        description: 'Tu tienda estará en manos de un equipo de expertos que no solo entiende el presente, sino que está siempre a la vanguardia de las últimas tendencias y herramientas. Esto significa que tu tienda se mantendrá siempre actualizada, escalando con las necesidades de tu negocio.',
        image: 'equipo.svg'
      },
      {
        title: 'Implementación rápida, resultados inmediatos',
        description: 'Olvídate de meses de espera. Nuestra implementación ágil te permite lanzar tu tienda online rápidamente, sin sacrificar calidad. Implementamos las mejores prácticas de UX/UI, SEO, CRO y velocidad de carga para garantizar que cada visitante tenga la mejor experiencia de compra.',
        image: 'implementacion.svg'
      },
      {
        title: 'Escala sin límites: tu tienda crece contigo',
        description: 'Te ayudamos a construir una tienda que no solo funcione ahora, sino que crezca contigo. Desde el inicio, nuestras soluciones están pensadas para escalar: desde un catálogo pequeño hasta miles de productos, con integración total y sin fricciones.',
        image: ''
      },
    ];
  }

  ngOnInit(): void { }
}
