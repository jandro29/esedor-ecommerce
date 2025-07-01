import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-project',
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.scss']
})
export class SelectedProjectComponent implements OnInit {


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
  },
  // Puedes agregar más proyectos aquí
];

onScroll(event: WheelEvent) {
  const container = document.querySelector('.horizontal-wrapper');
  if (container) {
    container.scrollLeft += event.deltaY;
    event.preventDefault();
  }
}


  constructor() { }

  ngOnInit(): void {
  }

}
