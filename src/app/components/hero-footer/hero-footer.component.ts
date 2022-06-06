import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-hero-footer',
  templateUrl: './hero-footer.component.html',
  styleUrls: ['./hero-footer.component.scss']
})
export class HeroFooterComponent implements OnInit {
  ParallaxCajaConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.3,
    parallaxSmoothness: 0.5,
    parallaxDirection: 'straight',
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
  }

}
