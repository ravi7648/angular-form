import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormResponseComponent } from './form-response/form-response.component';
import { FormEditViewComponent } from './form-edit-view/form-edit-view.component';
import { TextComponent } from './form-element/text/text.component';
import { DateComponent } from './form-element/date/date.component';
import { EmailComponent } from './form-element/email/email.component';
import { RatingComponent } from './form-element/rating/rating.component';
import { ChoiceComponent } from './form-element/choice/choice.component';
import { AnchorDirective } from './anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormHeaderComponent,
    FormElementComponent,
    FormViewComponent,
    FormPreviewComponent,
    FormResponseComponent,
    FormEditViewComponent,
    TextComponent,
    DateComponent,
    EmailComponent,
    RatingComponent,
    ChoiceComponent,
    AnchorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
