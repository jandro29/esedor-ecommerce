import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { RecaptchaModule } from 'ng-recaptcha';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AlliesComponent } from './components/allies/allies.component';
import { StepsComponent } from './components/formula/steps/steps.component';
import { StepsSliderComponent } from './components/formula/steps-slider/steps-slider.component';
import { FormulaComponent } from './components/formula/formula.component';
import { HomeComponent } from './pages/home/home.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroFooterComponent } from './components/hero-footer/hero-footer.component';
import { SelectedProjectComponent } from './components/selected-project/selected-project.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';

import { ModalService } from './modal.service';
import { StepsSliderTestComponent } from './components/steps-slider-test/steps-slider-test.component';
import { ComercioComponent } from './components/comercio/comercio.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ContactFormComponent,
    AlliesComponent,
    StepsComponent,
    StepsSliderComponent,
    FormulaComponent,
    HomeComponent,
    GraciasComponent,
    FooterComponent,
    HeroFooterComponent,
    SelectedProjectComponent,
    ContactModalComponent,
    StepsSliderTestComponent,
    ComercioComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxParallaxScrollModule,
    SwiperModule,
    HttpClientModule,
    RecaptchaModule,
    NgxGoogleAnalyticsModule.forRoot('UA-133445489-1')
  ],
  providers: [
    ModalService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    {
      provide: 'googleTagManagerId',
      useValue: 'GTM-TT62JBS'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
