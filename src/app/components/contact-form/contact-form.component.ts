import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  isLoading:boolean = false
  @Input() bgPrimary:boolean = false

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captcha = captchaResponse
  }

  captcha:string = ''

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]],
    phone: ['', [
      Validators.required,
      Validators.pattern("[0-9 ]{7,11}")
    ]],
    description: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.isLoading || this.captcha === '') return
    this.isLoading = true

    const formData = { ...this.contactForm.value, ...{ captcha: this.captcha } }

    this.http
      .post<any>(environment.contactFormApi, formData)
      .subscribe(
        data => {
          console.log('data: ', data)
          this.isLoading = false
          return this.router.navigate(['/gracias'])
        },
        error => {
          console.error('error', error)
          console.error('error resp', error.response)
          this.isLoading = false
          return alert('No se pudo procesar el formulario')
      })
  }

  get name() { return this.contactForm.get('name') }
  get email() { return this.contactForm.get('email') }
  get phone() { return this.contactForm.get('phone') }
  get description() { return this.contactForm.get('description') }

}
