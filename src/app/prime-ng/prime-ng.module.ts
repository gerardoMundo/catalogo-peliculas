import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [ButtonModule, CardModule, AccordionModule, InputTextModule],
})
export class PrimeNgModule {}
