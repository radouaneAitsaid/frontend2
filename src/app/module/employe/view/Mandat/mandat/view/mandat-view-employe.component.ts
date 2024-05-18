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


import {MandatEmployeService} from 'src/app/shared/service/employe/Mandat/MandatEmploye.service';
import {MandatDto} from 'src/app/shared/model/Mandat/Mandat.model';
import {MandatCriteria} from 'src/app/shared/criteria/Mandat/MandatCriteria.model';

import {ResponsabiliteDto} from 'src/app/shared/model/Mandat/Responsabilite.model';
import {ResponsabiliteEmployeService} from 'src/app/shared/service/employe/Mandat/ResponsabiliteEmploye.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeEmployeService} from 'src/app/shared/service/employe/commun/EmployeEmploye.service';
@Component({
  selector: 'app-mandat-view-employe',
  templateUrl: './mandat-view-employe.component.html'
})
export class MandatViewEmployeComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: MandatEmployeService, private responsabiliteService: ResponsabiliteEmployeService, private employeService: EmployeEmployeService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get responsabilite(): ResponsabiliteDto {
        return this.responsabiliteService.item;
    }
    set responsabilite(value: ResponsabiliteDto) {
        this.responsabiliteService.item = value;
    }
    get responsabilites(): Array<ResponsabiliteDto> {
        return this.responsabiliteService.items;
    }
    set responsabilites(value: Array<ResponsabiliteDto>) {
        this.responsabiliteService.items = value;
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

    get items(): Array<MandatDto> {
        return this.service.items;
    }

    set items(value: Array<MandatDto>) {
        this.service.items = value;
    }

    get item(): MandatDto {
        return this.service.item;
    }

    set item(value: MandatDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): MandatCriteria {
        return this.service.criteria;
    }

    set criteria(value: MandatCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
