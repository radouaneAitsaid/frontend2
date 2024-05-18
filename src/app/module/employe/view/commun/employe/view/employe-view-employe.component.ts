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


import {EmployeEmployeService} from 'src/app/shared/service/employe/commun/EmployeEmploye.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/commun/EmployeCriteria.model';

import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminEmployeService} from 'src/app/shared/service/employe/commun/EntiteAdminEmploye.service';
import {DiplomeDto} from 'src/app/shared/model/commun/Diplome.model';
import {DiplomeEmployeService} from 'src/app/shared/service/employe/commun/DiplomeEmploye.service';
@Component({
  selector: 'app-employe-view-employe',
  templateUrl: './employe-view-employe.component.html'
})
export class EmployeViewEmployeComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: EmployeEmployeService, private entiteAdminService: EntiteAdminEmployeService, private diplomeService: DiplomeEmployeService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get entiteAdmin(): EntiteAdminDto {
        return this.entiteAdminService.item;
    }
    set entiteAdmin(value: EntiteAdminDto) {
        this.entiteAdminService.item = value;
    }
    get entiteAdmins(): Array<EntiteAdminDto> {
        return this.entiteAdminService.items;
    }
    set entiteAdmins(value: Array<EntiteAdminDto>) {
        this.entiteAdminService.items = value;
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

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<EmployeDto> {
        return this.service.items;
    }

    set items(value: Array<EmployeDto>) {
        this.service.items = value;
    }

    get item(): EmployeDto {
        return this.service.item;
    }

    set item(value: EmployeDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): EmployeCriteria {
        return this.service.criteria;
    }

    set criteria(value: EmployeCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
