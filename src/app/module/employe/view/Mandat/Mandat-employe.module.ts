import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import {MultiSelectModule} from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import {
    ResponsabiliteDetailCreateEmployeComponent
} from './responsabilite-detail/create/responsabilite-detail-create-employe.component';
import {
    ResponsabiliteDetailEditEmployeComponent
} from './responsabilite-detail/edit/responsabilite-detail-edit-employe.component';
import {
    ResponsabiliteDetailViewEmployeComponent
} from './responsabilite-detail/view/responsabilite-detail-view-employe.component';
import {
    ResponsabiliteDetailListEmployeComponent
} from './responsabilite-detail/list/responsabilite-detail-list-employe.component';
import {ResponsabiliteCreateEmployeComponent} from './responsabilite/create/responsabilite-create-employe.component';
import {ResponsabiliteEditEmployeComponent} from './responsabilite/edit/responsabilite-edit-employe.component';
import {ResponsabiliteViewEmployeComponent} from './responsabilite/view/responsabilite-view-employe.component';
import {ResponsabiliteListEmployeComponent} from './responsabilite/list/responsabilite-list-employe.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';
import {MandatCreateEmployeComponent} from "./mandat/create/mandat-create-employe.component";
import {MandatListEmployeComponent} from "./mandat/list/mandat-list-employe.component";
import {MandatEditEmployeComponent} from "./mandat/edit/mandat-edit-employe.component";
import {MandatViewEmployeComponent} from "./mandat/view/mandat-view-employe.component";
import {RippleModule} from "primeng/ripple";


@NgModule({
    declarations: [

        ResponsabiliteDetailCreateEmployeComponent,
        ResponsabiliteDetailListEmployeComponent,
        ResponsabiliteDetailViewEmployeComponent,
        ResponsabiliteDetailEditEmployeComponent,
        ResponsabiliteCreateEmployeComponent,
        ResponsabiliteListEmployeComponent,
        ResponsabiliteViewEmployeComponent,
        ResponsabiliteEditEmployeComponent,
        MandatCreateEmployeComponent,
        MandatListEmployeComponent,
        MandatEditEmployeComponent,
        MandatViewEmployeComponent
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
        ResponsabiliteDetailCreateEmployeComponent,
        ResponsabiliteDetailListEmployeComponent,
        ResponsabiliteDetailViewEmployeComponent,
        ResponsabiliteDetailEditEmployeComponent,
        ResponsabiliteCreateEmployeComponent,
        ResponsabiliteListEmployeComponent,
        ResponsabiliteViewEmployeComponent,
        ResponsabiliteEditEmployeComponent,
        MandatCreateEmployeComponent,
        MandatListEmployeComponent,
        MandatEditEmployeComponent,
        MandatViewEmployeComponent
    ],
})
export class MandatEmployeModule {
}
