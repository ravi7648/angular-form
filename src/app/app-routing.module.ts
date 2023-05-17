import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormEditViewComponent } from './form-edit-view/form-edit-view.component';

const routes: Routes = [
  {
    path: "",
    component: FormEditViewComponent
  },
  {
    path: "preview",
    component: FormPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
