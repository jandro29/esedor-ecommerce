import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
// import { gsap, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {

  showDropdown:boolean = false;

  ParallaxCajaConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.3,
    parallaxSmoothness: 0.8,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-out',
    parallaxThrottleTime: 0
  };

  ParallaxCarritoConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-out',
    parallaxThrottleTime: 0
  }

  ParallaxCursorConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.3,
    parallaxSmoothness: 2,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-out',
    parallaxThrottleTime: 0
  }

  ParallaxPoligonoConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.3,
    parallaxSmoothness: 1,
    parallaxDirection: 'straight',
    parallaxTimingFunction: 'ease-out',
    parallaxThrottleTime: 0
  }

  constructor() { }

  ngOnInit(): void {
    // let mediaQuery = window.matchMedia("(min-width: 768px)");
    // this.mainHeroScrollTrigger(mediaQuery);
    // mediaQuery.addListener(this.mainHeroScrollTrigger);
  }

  // mainHeroScrollTrigger(mediaQuery) {
  //   console.log('query', mediaQuery)
  //   if(mediaQuery.matches) {
  //     ScrollTrigger.create({
  //       trigger: '#main-hero',
  //       start: 'top top',
  //       end: () => {
  //         const sectionServices = document.querySelector(".section-services") as HTMLElement;
  //         return `+=${sectionServices.offsetHeight}`
  //       },
  //       pinSpacing: false,
  //       pin: true
  //     })
  //   }
  // }

}
