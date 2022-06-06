import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public modalState$: Observable<any> = this.modalState.asObservable();

  constructor() { }

  updateModalState(updatedState) {
    this.modalState.next(updatedState);
  }
}
