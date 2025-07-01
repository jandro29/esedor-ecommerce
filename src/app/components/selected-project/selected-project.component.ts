import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-selected-project',
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.scss']
})
export class SelectedProjectComponent implements OnInit {

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  proyectos = [
    {
      nombre: 'MAP-IT',
      descripcion: `Fundado en el 2019 en la industria del Turismo es la primera
plataforma ecommerce de experiencias inmersivas en Perú...`,
      servicios: 'Branding, fotografía, experiencia de usuario y desarrollo a medida.',
      imagen: 'assets/images/mapit-logo.png',
      link: 'https://map-it.pe'
    },
    {
      nombre: 'MAP-IT',
      descripcion: `Fundado en el 2019 en la industria del Turismo es la primera
plataforma ecommerce de experiencias inmersivas en Perú...`,
      servicios: 'Branding, fotografía, experiencia de usuario y desarrollo a medida.',
      imagen: 'assets/images/mapit-logo.png',
      link: 'https://map-it.pe'
    },
    {
      nombre: 'MAP-IT',
      descripcion: `Fundado en el 2019 en la industria del Turismo es la primera
plataforma ecommerce de experiencias inmersivas en Perú...`,
      servicios: 'Branding, fotografía, experiencia de usuario y desarrollo a medida.',
      imagen: 'assets/images/mapit-logo.png',
      link: 'https://map-it.pe'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onScroll(event: WheelEvent): void {
    const container = this.scrollContainer.nativeElement;

    const isScrollable = container.scrollWidth > container.clientWidth;
    const atStart = container.scrollLeft === 0;
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

    const goingRight = event.deltaY > 0;
    const goingLeft = event.deltaY < 0;

    // Solo aplicar scroll horizontal si hay más para deslizar
    if (isScrollable && ((goingRight && !atEnd) || (goingLeft && !atStart))) {
      container.scrollLeft += event.deltaY;
      event.preventDefault(); // Evita el scroll vertical solo si hay scroll horizontal disponible
    }
  }
}
