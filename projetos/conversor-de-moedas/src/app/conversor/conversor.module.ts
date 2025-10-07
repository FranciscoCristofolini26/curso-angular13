import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [ 
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
