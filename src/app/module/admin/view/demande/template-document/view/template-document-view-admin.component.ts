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


import {TemplateDocumentAdminService} from 'src/app/shared/service/admin/demande/TemplateDocumentAdmin.service';
import {TemplateDocumentDto} from 'src/app/shared/model/demande/TemplateDocument.model';
import {TemplateDocumentCriteria} from 'src/app/shared/criteria/demande/TemplateDocumentCriteria.model';

import {TypeDocumentDto} from 'src/app/shared/model/demande/TypeDocument.model';
import {TypeDocumentAdminService} from 'src/app/shared/service/admin/demande/TypeDocumentAdmin.service';
@Component({
  selector: 'app-template-document-view-admin',
  templateUrl: './template-document-view-admin.component.html'
})
export class TemplateDocumentViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: TemplateDocumentAdminService, private typeDocumentService: TypeDocumentAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get typeDocument(): TypeDocumentDto {
        return this.typeDocumentService.item;
    }
    set typeDocument(value: TypeDocumentDto) {
        this.typeDocumentService.item = value;
    }
    get typeDocuments(): Array<TypeDocumentDto> {
        return this.typeDocumentService.items;
    }
    set typeDocuments(value: Array<TypeDocumentDto>) {
        this.typeDocumentService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<TemplateDocumentDto> {
        return this.service.items;
    }

    set items(value: Array<TemplateDocumentDto>) {
        this.service.items = value;
    }

    get item(): TemplateDocumentDto {
        return this.service.item;
    }

    set item(value: TemplateDocumentDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): TemplateDocumentCriteria {
        return this.service.criteria;
    }

    set criteria(value: TemplateDocumentCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
