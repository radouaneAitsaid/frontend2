import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { DiplomeCreateEmployeComponent } from './diplome/create/diplome-create-employe.component';
import { DiplomeEditEmployeComponent } from './diplome/edit/diplome-edit-employe.component';
import { DiplomeViewEmployeComponent } from './diplome/view/diplome-view-employe.component';
import { DiplomeListEmployeComponent } from './diplome/list/diplome-list-employe.component';
import { EmployeCreateEmployeComponent } from './employe/create/employe-create-employe.component';
import { EmployeEditEmployeComponent } from './employe/edit/employe-edit-employe.component';
import { EmployeViewEmployeComponent } from './employe/view/employe-view-employe.component';
import { EmployeListEmployeComponent } from './employe/list/employe-list-employe.component';
import { EntiteAdminCreateEmployeComponent } from './entite-admin/create/entite-admin-create-employe.component';
import { EntiteAdminEditEmployeComponent } from './entite-admin/edit/entite-admin-edit-employe.component';
import { EntiteAdminViewEmployeComponent } from './entite-admin/view/entite-admin-view-employe.component';
import { EntiteAdminListEmployeComponent } from './entite-admin/list/entite-admin-list-employe.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [

    DiplomeCreateEmployeComponent,
    DiplomeListEmployeComponent,
    DiplomeViewEmployeComponent,
    DiplomeEditEmployeComponent,
    EmployeCreateEmployeComponent,
    EmployeListEmployeComponent,
    EmployeViewEmployeComponent,
    EmployeEditEmployeComponent,
    EntiteAdminCreateEmployeComponent,
    EntiteAdminListEmployeComponent,
    EntiteAdminViewEmployeComponent,
    EntiteAdminEditEmployeComponent,
  ],
    imports: [
        CommonModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        ConfirmDialogModule,
        DialogModule,
        PasswordModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        DropdownModule,
        TabViewModule,
        InputSwitchModule,
        InputTextareaModule,
        CalendarModule,
        PanelModule,
        MessageModule,
        MessagesModule,
        InputNumberModule,
        BadgeModule,
        MultiSelectModule,
        PaginatorModule,
        TranslateModule,
        FileUploadModule,
        FullCalendarModule,
        CardModule,
        EditorModule,
        RippleModule,


    ],
  exports: [
  DiplomeCreateEmployeComponent,
  DiplomeListEmployeComponent,
  DiplomeViewEmployeComponent,
  DiplomeEditEmployeComponent,
  EmployeCreateEmployeComponent,
  EmployeListEmployeComponent,
  EmployeViewEmployeComponent,
  EmployeEditEmployeComponent,
  EntiteAdminCreateEmployeComponent,
  EntiteAdminListEmployeComponent,
  EntiteAdminViewEmployeComponent,
  EntiteAdminEditEmployeComponent,
  ],
})
export class CommunEmployeModule { }
