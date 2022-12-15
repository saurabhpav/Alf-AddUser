import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCommonModule} from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const material =[
  MatTabsModule,
  MatIconModule,
MatDatepickerModule,
  MatFormFieldModule,
MatRadioModule,
MatCommonModule,
MatBottomSheetModule,
MatSlideToggleModule,
MatTableModule,
MatMenuModule,
FormsModule,
ReactiveFormsModule

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],

    exports: [

      material
  ]
})
export class MatModule { }
