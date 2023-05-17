import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormResponseComponent } from './form-response/form-response.component';
import { FormEditViewComponent } from './form-edit-view/form-edit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FormHeaderComponent,
    FormElementComponent,
    FormViewComponent,
    FormPreviewComponent,
    FormResponseComponent,
    FormEditViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
