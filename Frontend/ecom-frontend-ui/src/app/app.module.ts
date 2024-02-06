import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsLetterComponent } from './footer/news-letter/news-letter.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeaturesComponent } from './home/features/features.component';
import { ServicesComponent } from './home/services/services.component';
import { BannerComponent } from './home/banner/banner.component';
import { FailComponent } from './fail/fail.component';
import { ShopComponent } from './shop/shop.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CartComponent } from './cart/cart.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { FactsComponent } from './home/facts/facts.component';
import { SearchComponent } from './header/search/search.component';
import { ContactComponent } from './contact/contact.component';
import { TopbarComponent } from './header/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsLetterComponent,
    HeroComponent,
    FeaturesComponent,
    ServicesComponent,
    BannerComponent,
    FailComponent,
    ShopComponent,
    UserProfileComponent,
    CartComponent,
    TestimonialComponent,
    FactsComponent,
    SearchComponent,
    ContactComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
