import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

  showState:boolean;

  constructor(private modalService: ModalService) {
    this.showState = false;
  }

  ngOnInit(): void {
    this.modalService.modalState$.subscribe(modalState => this.showState = modalState);
  }

  ClickedOut(event): void {
    if(event.target.classList.contains('modal')) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.modalService.updateModalState(false)
  }
}
