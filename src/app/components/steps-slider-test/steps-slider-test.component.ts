import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-steps-slider-test',
  templateUrl: './steps-slider-test.component.html',
  styleUrls: ['./steps-slider-test.component.scss']
})
export class StepsSliderTestComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    gsap.to('.steps-slider__container', {
      scrollTrigger: {
        trigger: '.steps-slider__container',
        start: 'top top',
        pinSpacing: false,
        pin: true,
        scrub: true
      },
      x: () => {
        const stepsSliderItem = document.querySelector('.steps-slider__item') as HTMLElement;
        return `-=${stepsSliderItem.offsetWidth}`
      }
    })
  }

  openModal(): void {
    this.modalService.updateModalState(true)
  }

}
