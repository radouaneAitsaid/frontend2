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


import {AvancementAdminService} from 'src/app/shared/service/admin/avancement/AvancementAdmin.service';
import {AvancementDto} from 'src/app/shared/model/avancement/Avancement.model';
import {AvancementCriteria} from 'src/app/shared/criteria/avancement/AvancementCriteria.model';

import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/shared/service/admin/avancement/EchelonAdmin.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
@Component({
  selector: 'app-avancement-view-admin',
  templateUrl: './avancement-view-admin.component.html'
})
export class AvancementViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: AvancementAdminService, private echelonService: EchelonAdminService, private employeService: EmployeAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get echelleAncien(): EchelonDto {
        return this.echelonService.item;
    }
    set echelleAncien(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelleAnciens(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelleAnciens(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get echelleNouveau(): EchelonDto {
        return this.echelonService.item;
    }
    set echelleNouveau(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelleNouveaus(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelleNouveaus(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get employe(): EmployeDto {
        return this.employeService.item;
    }
    set employe(value: EmployeDto) {
        this.employeService.item = value;
    }
    get employes(): Array<EmployeDto> {
        return this.employeService.items;
    }
    set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<AvancementDto> {
        return this.service.items;
    }

    set items(value: Array<AvancementDto>) {
        this.service.items = value;
    }

    get item(): AvancementDto {
        return this.service.item;
    }

    set item(value: AvancementDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): AvancementCriteria {
        return this.service.criteria;
    }

    set criteria(value: AvancementCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
