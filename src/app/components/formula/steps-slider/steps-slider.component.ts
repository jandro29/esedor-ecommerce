import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-steps-slider',
  templateUrl: './steps-slider.component.html',
  styleUrls: ['./steps-slider.component.scss']
})
export class StepsSliderComponent implements OnInit {

  public config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    navigation: false,
    pagination: false
  }

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalService.updateModalState(true)
  }
}
