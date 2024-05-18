import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginEmployeComponent } from './login-employe/login-employe.component';
import { RegisterEmployeComponent } from './register-employe/register-employe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { AvancementEmployeModule } from './view/avancement/avancement-employe.module';
import { AvancementEmployeRoutingModule } from './view/avancement/avancement-employe-routing.module';
import { MandatEmployeModule } from './view/Mandat/Mandat-employe.module';
import { MandatEmployeRoutingModule } from './view/Mandat/Mandat-employe-routing.module';
import { CommunEmployeModule } from './view/commun/commun-employe.module';
import { CommunEmployeRoutingModule } from './view/commun/commun-employe-routing.module';
import { DemandeEmployeModule } from './view/demande/demande-employe.module';
import { DemandeEmployeRoutingModule } from './view/demande/demande-employe-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginEmployeComponent,
   RegisterEmployeComponent
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
  AvancementEmployeModule,
  AvancementEmployeRoutingModule,
  MandatEmployeModule,
  MandatEmployeRoutingModule,
  CommunEmployeModule,
  CommunEmployeRoutingModule,
  DemandeEmployeModule,
  DemandeEmployeRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginEmployeComponent,
  RegisterEmployeComponent,

    AvancementEmployeModule,
    MandatEmployeModule,
    CommunEmployeModule,
    DemandeEmployeModule,
  SecurityModule
  ],

})
export class EmployeModule { }
