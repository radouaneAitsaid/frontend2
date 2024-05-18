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

import { EchelonCreateAdminComponent } from './echelon/create/echelon-create-admin.component';
import { EchelonEditAdminComponent } from './echelon/edit/echelon-edit-admin.component';
import { EchelonViewAdminComponent } from './echelon/view/echelon-view-admin.component';
import { EchelonListAdminComponent } from './echelon/list/echelon-list-admin.component';
import { AvancementCreateAdminComponent } from './avancement/create/avancement-create-admin.component';
import { AvancementEditAdminComponent } from './avancement/edit/avancement-edit-admin.component';
import { AvancementViewAdminComponent } from './avancement/view/avancement-view-admin.component';
import { AvancementListAdminComponent } from './avancement/list/avancement-list-admin.component';
import { EchelleCreateAdminComponent } from './echelle/create/echelle-create-admin.component';
import { EchelleEditAdminComponent } from './echelle/edit/echelle-edit-admin.component';
import { EchelleViewAdminComponent } from './echelle/view/echelle-view-admin.component';
import { EchelleListAdminComponent } from './echelle/list/echelle-list-admin.component';

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

    EchelonCreateAdminComponent,
    EchelonListAdminComponent,
    EchelonViewAdminComponent,
    EchelonEditAdminComponent,
    AvancementCreateAdminComponent,
    AvancementListAdminComponent,
    AvancementViewAdminComponent,
    AvancementEditAdminComponent,
    EchelleCreateAdminComponent,
    EchelleListAdminComponent,
    EchelleViewAdminComponent,
    EchelleEditAdminComponent,
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
  EchelonCreateAdminComponent,
  EchelonListAdminComponent,
  EchelonViewAdminComponent,
  EchelonEditAdminComponent,
  AvancementCreateAdminComponent,
  AvancementListAdminComponent,
  AvancementViewAdminComponent,
  AvancementEditAdminComponent,
  EchelleCreateAdminComponent,
  EchelleListAdminComponent,
  EchelleViewAdminComponent,
  EchelleEditAdminComponent,
  ],
})
export class AvancementAdminModule { }
