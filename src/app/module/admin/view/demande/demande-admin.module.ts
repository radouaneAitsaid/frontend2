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

import { EtatDemandeDocumentCreateAdminComponent } from './etat-demande-document/create/etat-demande-document-create-admin.component';
import { EtatDemandeDocumentEditAdminComponent } from './etat-demande-document/edit/etat-demande-document-edit-admin.component';
import { EtatDemandeDocumentViewAdminComponent } from './etat-demande-document/view/etat-demande-document-view-admin.component';
import { EtatDemandeDocumentListAdminComponent } from './etat-demande-document/list/etat-demande-document-list-admin.component';
import { TemplateDocumentCreateAdminComponent } from './template-document/create/template-document-create-admin.component';
import { TemplateDocumentEditAdminComponent } from './template-document/edit/template-document-edit-admin.component';
import { TemplateDocumentViewAdminComponent } from './template-document/view/template-document-view-admin.component';
import { TemplateDocumentListAdminComponent } from './template-document/list/template-document-list-admin.component';
import { DemandeDocumentCreateAdminComponent } from './demande-document/create/demande-document-create-admin.component';
import { DemandeDocumentEditAdminComponent } from './demande-document/edit/demande-document-edit-admin.component';
import { DemandeDocumentViewAdminComponent } from './demande-document/view/demande-document-view-admin.component';
import { DemandeDocumentListAdminComponent } from './demande-document/list/demande-document-list-admin.component';
import { TypeDocumentCreateAdminComponent } from './type-document/create/type-document-create-admin.component';
import { TypeDocumentEditAdminComponent } from './type-document/edit/type-document-edit-admin.component';
import { TypeDocumentViewAdminComponent } from './type-document/view/type-document-view-admin.component';
import { TypeDocumentListAdminComponent } from './type-document/list/type-document-list-admin.component';

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

    EtatDemandeDocumentCreateAdminComponent,
    EtatDemandeDocumentListAdminComponent,
    EtatDemandeDocumentViewAdminComponent,
    EtatDemandeDocumentEditAdminComponent,
    TemplateDocumentCreateAdminComponent,
    TemplateDocumentListAdminComponent,
    TemplateDocumentViewAdminComponent,
    TemplateDocumentEditAdminComponent,
    DemandeDocumentCreateAdminComponent,
    DemandeDocumentListAdminComponent,
    DemandeDocumentViewAdminComponent,
    DemandeDocumentEditAdminComponent,
    TypeDocumentCreateAdminComponent,
    TypeDocumentListAdminComponent,
    TypeDocumentViewAdminComponent,
    TypeDocumentEditAdminComponent,
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
  EtatDemandeDocumentCreateAdminComponent,
  EtatDemandeDocumentListAdminComponent,
  EtatDemandeDocumentViewAdminComponent,
  EtatDemandeDocumentEditAdminComponent,
  TemplateDocumentCreateAdminComponent,
  TemplateDocumentListAdminComponent,
  TemplateDocumentViewAdminComponent,
  TemplateDocumentEditAdminComponent,
  DemandeDocumentCreateAdminComponent,
  DemandeDocumentListAdminComponent,
  DemandeDocumentViewAdminComponent,
  DemandeDocumentEditAdminComponent,
  TypeDocumentCreateAdminComponent,
  TypeDocumentListAdminComponent,
  TypeDocumentViewAdminComponent,
  TypeDocumentEditAdminComponent,
  ],
})
export class DemandeAdminModule { }
