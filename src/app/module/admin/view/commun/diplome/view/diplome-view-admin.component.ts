import {Component, OnInit} from '@angular/core';


import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';
import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';


import {DiplomeAdminService} from 'src/app/shared/service/admin/commun/DiplomeAdmin.service';
import {DiplomeDto} from 'src/app/shared/model/commun/Diplome.model';
import {DiplomeCriteria} from 'src/app/shared/criteria/commun/DiplomeCriteria.model';

import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/shared/service/admin/avancement/EchelonAdmin.service';
@Component({
  selector: 'app-diplome-view-admin',
  templateUrl: './diplome-view-admin.component.html'
})
export class DiplomeViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: DiplomeAdminService, private echelonService: EchelonAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get echelon(): EchelonDto {
        return this.echelonService.item;
    }
    set echelon(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelons(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<DiplomeDto> {
        return this.service.items;
    }

    set items(value: Array<DiplomeDto>) {
        this.service.items = value;
    }

    get item(): DiplomeDto {
        return this.service.item;
    }

    set item(value: DiplomeDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): DiplomeCriteria {
        return this.service.criteria;
    }

    set criteria(value: DiplomeCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
