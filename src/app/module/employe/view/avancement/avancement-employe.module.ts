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

import { EchelonCreateEmployeComponent } from './echelon/create/echelon-create-employe.component';
import { EchelonEditEmployeComponent } from './echelon/edit/echelon-edit-employe.component';
import { EchelonViewEmployeComponent } from './echelon/view/echelon-view-employe.component';
import { EchelonListEmployeComponent } from './echelon/list/echelon-list-employe.component';
import { AvancementCreateEmployeComponent } from './avancement/create/avancement-create-employe.component';
import { AvancementEditEmployeComponent } from './avancement/edit/avancement-edit-employe.component';
import { AvancementViewEmployeComponent } from './avancement/view/avancement-view-employe.component';
import { AvancementListEmployeComponent } from './avancement/list/avancement-list-employe.component';
import { EchelleCreateEmployeComponent } from './echelle/create/echelle-create-employe.component';
import { EchelleEditEmployeComponent } from './echelle/edit/echelle-edit-employe.component';
import { EchelleViewEmployeComponent } from './echelle/view/echelle-view-employe.component';
import { EchelleListEmployeComponent } from './echelle/list/echelle-list-employe.component';

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

    EchelonCreateEmployeComponent,
    EchelonListEmployeComponent,
    EchelonViewEmployeComponent,
    EchelonEditEmployeComponent,
    AvancementCreateEmployeComponent,
    AvancementListEmployeComponent,
    AvancementViewEmployeComponent,
    AvancementEditEmployeComponent,
    EchelleCreateEmployeComponent,
    EchelleListEmployeComponent,
    EchelleViewEmployeComponent,
    EchelleEditEmployeComponent,
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
  EchelonCreateEmployeComponent,
  EchelonListEmployeComponent,
  EchelonViewEmployeComponent,
  EchelonEditEmployeComponent,
  AvancementCreateEmployeComponent,
  AvancementListEmployeComponent,
  AvancementViewEmployeComponent,
  AvancementEditEmployeComponent,
  EchelleCreateEmployeComponent,
  EchelleListEmployeComponent,
  EchelleViewEmployeComponent,
  EchelleEditEmployeComponent,
  ],
})
export class AvancementEmployeModule { }
