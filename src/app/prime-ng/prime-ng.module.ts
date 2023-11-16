import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [ButtonModule, 
            CardModule, 
            AccordionModule, 
            InputTextModule, 
            ButtonModule,
            ConfirmDialogModule,
            DialogModule,
            FieldsetModule,
            InputNumberModule,
            MenubarModule,
            PanelModule,
            TableModule,
            ToastModule,
            ToolbarModule,],
})
export class PrimeNgModule {}
