import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PracticeOneComponent } from './practice-one/practice-one.component';
import { PracticeTwoComponent } from './practice-two/practice-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PracticeOneComponent,
    PracticeTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
