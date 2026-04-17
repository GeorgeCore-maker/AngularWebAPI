import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';

const PRIME_MODULES = [
  ButtonModule,
  TableModule,
  TooltipModule,
  MenubarModule,
  CardModule,
  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  DropdownModule,
  CalendarModule,
  CheckboxModule,
  RadioButtonModule,
  DialogModule,
  ConfirmDialogModule,
  ToastModule,
  ToolbarModule,
  FileUploadModule,
  PaginatorModule,
  ProgressSpinnerModule,
  TabViewModule,
  AccordionModule,
  PanelModule,
  DividerModule,
  ChipModule,
  BadgeModule,
  AvatarModule,
  TagModule,
  SplitButtonModule,
  MultiSelectModule,
  AutoCompleteModule
];

@NgModule({
  imports: [
    CommonModule,
    ...PRIME_MODULES
  ],
  exports: [
    ...PRIME_MODULES
  ]
})
export class PrimeModule { }
