import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})

export class FormulaComponent implements OnInit {
  constructor(
    private elementRef:ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private modalService:ModalService) { }

  handleModal(): void {
    this.modalService.updateModalState(true)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleSquareFirst, true)
    window.addEventListener('scroll', this.handleSquareSecond, true)
    window.addEventListener('scroll', this.handlePoligono, true)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleSquareFirst, true);
    window.removeEventListener('scroll', this.handleSquareSecond, true);
    window.removeEventListener('scroll', this.handlePoligono, true);
  }

  toAllies = () : void => {
    let topPosition = this.document.getElementById('alliesSection').offsetTop
    window.scrollTo({ top: topPosition, behavior: 'smooth' })

  }

  handleSquareFirst = (event) : void => {
    let wYOffset = window.pageYOffset
    let rotation = (wYOffset - 500) / 75
    this.elementRef.nativeElement
      .querySelector('.square--first')
      .style.transform = `rotate(-${rotation}deg)`
  }

  handleSquareSecond = (event) : void => {
    let wYOffset = window.pageYOffset
    let rotation = (wYOffset - 500) / 90
    this.elementRef.nativeElement
      .querySelector('.square--second')
      .style.transform = `rotate(${rotation}deg)`
  }

  handlePoligono = (event) : void => {
    let wYOffset = window.pageYOffset
    let rotation = wYOffset / 15
    this.elementRef.nativeElement
      .querySelector('.poligono')
      .style.transform = `rotate(${rotation}deg)`
  }

}
