import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({positionClass: "toast-bottom-right"})  
  ],
  exports: [
    NgbModule,
    FormsModule,
    ToastrModule
   ]
})
export class SharedModule { }
