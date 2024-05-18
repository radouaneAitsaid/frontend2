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


import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminCriteria} from 'src/app/shared/criteria/commun/EntiteAdminCriteria.model';

import {DiplomeDto} from 'src/app/shared/model/commun/Diplome.model';
import {DiplomeAdminService} from 'src/app/shared/service/admin/commun/DiplomeAdmin.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
@Component({
  selector: 'app-entite-admin-view-admin',
  templateUrl: './entite-admin-view-admin.component.html'
})
export class EntiteAdminViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    employes = new EmployeDto();
    employess: Array<EmployeDto> = [];

    constructor(private service: EntiteAdminAdminService, private diplomeService: DiplomeAdminService, private employeService: EmployeAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get diplome(): DiplomeDto {
        return this.diplomeService.item;
    }
    set diplome(value: DiplomeDto) {
        this.diplomeService.item = value;
    }
    get diplomes(): Array<DiplomeDto> {
        return this.diplomeService.items;
    }
    set diplomes(value: Array<DiplomeDto>) {
        this.diplomeService.items = value;
    }
    get chefDepart(): EmployeDto {
        return this.employeService.item;
    }
    set chefDepart(value: EmployeDto) {
        this.employeService.item = value;
    }
    get chefDeparts(): Array<EmployeDto> {
        return this.employeService.items;
    }
    set chefDeparts(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<EntiteAdminDto> {
        return this.service.items;
    }

    set items(value: Array<EntiteAdminDto>) {
        this.service.items = value;
    }

    get item(): EntiteAdminDto {
        return this.service.item;
    }

    set item(value: EntiteAdminDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): EntiteAdminCriteria {
        return this.service.criteria;
    }

    set criteria(value: EntiteAdminCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
