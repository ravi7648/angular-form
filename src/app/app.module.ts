import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { QuestionComponent } from './form-element/question/question.component';
import { BottomIconsComponent } from './form-element/bottom-icons/bottom-icons.component';
import { DialogComponent, CustomDialogComponent } from './form-ui-material/dialog/dialog.component';
import { SnackbarComponent } from './form-ui-material/snackbar/snackbar.component';

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
    QuestionComponent,
    BottomIconsComponent,
    DialogComponent,
    CustomDialogComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    ClipboardModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
