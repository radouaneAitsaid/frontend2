import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';

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



import {TemplateDocumentAdminService} from 'src/app/shared/service/admin/demande/TemplateDocumentAdmin.service';
import {TemplateDocumentDto} from 'src/app/shared/model/demande/TemplateDocument.model';
import {TemplateDocumentCriteria} from 'src/app/shared/criteria/demande/TemplateDocumentCriteria.model';
import {TypeDocumentDto} from 'src/app/shared/model/demande/TypeDocument.model';
import {TypeDocumentAdminService} from 'src/app/shared/service/admin/demande/TypeDocumentAdmin.service';
@Component({
  selector: 'app-template-document-create-admin',
  templateUrl: './template-document-create-admin.component.html'
})
export class TemplateDocumentCreateAdminComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;



   private _validTemplateDocumentRef = true;

	constructor(private service: TemplateDocumentAdminService , private typeDocumentService: TypeDocumentAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.typeDocumentService.findAll().subscribe((data) => this.typeDocuments = data);
    }


    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new TemplateDocumentDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
        this.validTemplateDocumentRef = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTemplateDocumentRef();
    }

    public validateTemplateDocumentRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validTemplateDocumentRef = false;
        } else {
            this.validTemplateDocumentRef = true;
        }
    }


    public async openCreateTypeDocument(typeDocument: string) {
    const isPermistted = await this.roleService.isPermitted('TypeDocument', 'add');
    if(isPermistted) {
         this.typeDocument = new TypeDocumentDto();
         this.createTypeDocumentDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get createTypeDocumentDialog(): boolean {
        return this.typeDocumentService.createDialog;
    }
    set createTypeDocumentDialog(value: boolean) {
        this.typeDocumentService.createDialog= value;
    }



    get validTemplateDocumentRef(): boolean {
        return this._validTemplateDocumentRef;
    }

    set validTemplateDocumentRef(value: boolean) {
         this._validTemplateDocumentRef = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): TemplateDocumentCriteria {
        return this.service.criteria;
    }

    set criteria(value: TemplateDocumentCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }


}
