import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  steps;
  sliderIndex:number;

  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    navigation: {
      prevEl: '.prev-btn',
      nextEl: '.next-btn'
    },
    pagination: false
  }

  constructor(private modalService:ModalService) {
    this.sliderIndex = 0;

    this.steps = [];
    this.steps.push({ title: 'PRIMER PASO', subtitle: 'Agregamos valor ofreciendo experiencias excepcionales', description: 'Identificamos cuándo, dónde y cómo compra tu cliente usando un set de disciplinas de investigación UX.', image: 'step-01.svg'  })
    this.steps.push({ title: 'SEGUNDO PASO', subtitle: 'Pensamos en la lógica y creamos un prototipo', description:         'Creamos versiones interactivas de escritorio, tablet y dispositivo móvil, plasmados en el prototipo de UX en Figma.', image: 'step-02.svg' })
    this.steps.push({ title: 'TERCER PASO', subtitle: 'Diseñamos tu tienda virtual y sistema de diseño', description:       'Creamos la identidad visual de tu marca con una guía de estilos de la interfaz de usuario e implementamos un sistema de diseño.', image: 'step-03.svg' })
    this.steps.push({ title: 'CUARTO PASO', subtitle: 'Definimos la tecnología y establecemos el alcance', description:     'Creamos un nuevo código fuente o usamos uno de código abierto, y establecemos los sprints necesarios para cumplir tus objetivos.', image: 'step-04-responsive.svg' })
    this.steps.push({ title: 'QUINTO PASO', subtitle: 'Lanzamos tu producto y la campaña de marketing', description:'Llegamos a más usuarios usando creando un social media plan y una campaña de Google ADS agrandando tu funnel de clientes.', image: 'step-05-responsive.svg' })
  }

  openModal(): void {
    this.modalService.updateModalState(true)
  }

  ngOnInit(): void {
  }

}
