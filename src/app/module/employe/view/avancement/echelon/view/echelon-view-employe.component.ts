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


import {EchelonEmployeService} from 'src/app/shared/service/employe/avancement/EchelonEmploye.service';
import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonCriteria} from 'src/app/shared/criteria/avancement/EchelonCriteria.model';

import {EchelleDto} from 'src/app/shared/model/avancement/Echelle.model';
import {EchelleEmployeService} from 'src/app/shared/service/employe/avancement/EchelleEmploye.service';
@Component({
  selector: 'app-echelon-view-employe',
  templateUrl: './echelon-view-employe.component.html'
})
export class EchelonViewEmployeComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: EchelonEmployeService, private echelleService: EchelleEmployeService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get echelle(): EchelleDto {
        return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<EchelonDto> {
        return this.service.items;
    }

    set items(value: Array<EchelonDto>) {
        this.service.items = value;
    }

    get item(): EchelonDto {
        return this.service.item;
    }

    set item(value: EchelonDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): EchelonCriteria {
        return this.service.criteria;
    }

    set criteria(value: EchelonCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
