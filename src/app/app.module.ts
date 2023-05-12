import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContainerComponent} from './Container/container.component';
import {NavwrapperComponent} from './navwrapper/navwrapper.component';
import {BodycontentComponent} from './Bodycontent/bodycontent.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavwrapperComponent,
    BodycontentComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
