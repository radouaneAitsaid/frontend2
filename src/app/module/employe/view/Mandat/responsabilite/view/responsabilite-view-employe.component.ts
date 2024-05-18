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


import {ResponsabiliteEmployeService} from 'src/app/shared/service/employe/Mandat/ResponsabiliteEmploye.service';
import {ResponsabiliteDto} from 'src/app/shared/model/Mandat/Responsabilite.model';
import {ResponsabiliteCriteria} from 'src/app/shared/criteria/Mandat/ResponsabiliteCriteria.model';

import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonEmployeService} from 'src/app/shared/service/employe/avancement/EchelonEmploye.service';
@Component({
  selector: 'app-responsabilite-view-employe',
  templateUrl: './responsabilite-view-employe.component.html'
})
export class ResponsabiliteViewEmployeComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: ResponsabiliteEmployeService, private echelonService: EchelonEmployeService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get echelonMin(): EchelonDto {
        return this.echelonService.item;
    }
    set echelonMin(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelonMins(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelonMins(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<ResponsabiliteDto> {
        return this.service.items;
    }

    set items(value: Array<ResponsabiliteDto>) {
        this.service.items = value;
    }

    get item(): ResponsabiliteDto {
        return this.service.item;
    }

    set item(value: ResponsabiliteDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ResponsabiliteCriteria {
        return this.service.criteria;
    }

    set criteria(value: ResponsabiliteCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
