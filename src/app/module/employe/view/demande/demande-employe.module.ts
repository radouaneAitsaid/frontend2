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

import { EtatDemandeDocumentCreateEmployeComponent } from './etat-demande-document/create/etat-demande-document-create-employe.component';
import { EtatDemandeDocumentEditEmployeComponent } from './etat-demande-document/edit/etat-demande-document-edit-employe.component';
import { EtatDemandeDocumentViewEmployeComponent } from './etat-demande-document/view/etat-demande-document-view-employe.component';
import { EtatDemandeDocumentListEmployeComponent } from './etat-demande-document/list/etat-demande-document-list-employe.component';
import { TemplateDocumentCreateEmployeComponent } from './template-document/create/template-document-create-employe.component';
import { TemplateDocumentEditEmployeComponent } from './template-document/edit/template-document-edit-employe.component';
import { TemplateDocumentViewEmployeComponent } from './template-document/view/template-document-view-employe.component';
import { TemplateDocumentListEmployeComponent } from './template-document/list/template-document-list-employe.component';
import { DemandeDocumentCreateEmployeComponent } from './demande-document/create/demande-document-create-employe.component';
import { DemandeDocumentEditEmployeComponent } from './demande-document/edit/demande-document-edit-employe.component';
import { DemandeDocumentViewEmployeComponent } from './demande-document/view/demande-document-view-employe.component';
import { DemandeDocumentListEmployeComponent } from './demande-document/list/demande-document-list-employe.component';
import { TypeDocumentCreateEmployeComponent } from './type-document/create/type-document-create-employe.component';
import { TypeDocumentEditEmployeComponent } from './type-document/edit/type-document-edit-employe.component';
import { TypeDocumentViewEmployeComponent } from './type-document/view/type-document-view-employe.component';
import { TypeDocumentListEmployeComponent } from './type-document/list/type-document-list-employe.component';

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

    EtatDemandeDocumentCreateEmployeComponent,
    EtatDemandeDocumentListEmployeComponent,
    EtatDemandeDocumentViewEmployeComponent,
    EtatDemandeDocumentEditEmployeComponent,
    TemplateDocumentCreateEmployeComponent,
    TemplateDocumentListEmployeComponent,
    TemplateDocumentViewEmployeComponent,
    TemplateDocumentEditEmployeComponent,
    DemandeDocumentCreateEmployeComponent,
    DemandeDocumentListEmployeComponent,
    DemandeDocumentViewEmployeComponent,
    DemandeDocumentEditEmployeComponent,
    TypeDocumentCreateEmployeComponent,
    TypeDocumentListEmployeComponent,
    TypeDocumentViewEmployeComponent,
    TypeDocumentEditEmployeComponent,
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
  EtatDemandeDocumentCreateEmployeComponent,
  EtatDemandeDocumentListEmployeComponent,
  EtatDemandeDocumentViewEmployeComponent,
  EtatDemandeDocumentEditEmployeComponent,
  TemplateDocumentCreateEmployeComponent,
  TemplateDocumentListEmployeComponent,
  TemplateDocumentViewEmployeComponent,
  TemplateDocumentEditEmployeComponent,
  DemandeDocumentCreateEmployeComponent,
  DemandeDocumentListEmployeComponent,
  DemandeDocumentViewEmployeComponent,
  DemandeDocumentEditEmployeComponent,
  TypeDocumentCreateEmployeComponent,
  TypeDocumentListEmployeComponent,
  TypeDocumentViewEmployeComponent,
  TypeDocumentEditEmployeComponent,
  ],
})
export class DemandeEmployeModule { }
