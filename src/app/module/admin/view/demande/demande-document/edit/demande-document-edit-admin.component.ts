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




import {DemandeDocumentAdminService} from 'src/app/shared/service/admin/demande/DemandeDocumentAdmin.service';
import {DemandeDocumentDto} from 'src/app/shared/model/demande/DemandeDocument.model';
import {DemandeDocumentCriteria} from 'src/app/shared/criteria/demande/DemandeDocumentCriteria.model';


import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
import {TypeDocumentDto} from 'src/app/shared/model/demande/TypeDocument.model';
import {TypeDocumentAdminService} from 'src/app/shared/service/admin/demande/TypeDocumentAdmin.service';

@Component({
  selector: 'app-demande-document-edit-admin',
  templateUrl: './demande-document-edit-admin.component.html'
})
export class DemandeDocumentEditAdminComponent implements OnInit {

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



    private _validDemandeDocumentRef = true;




    constructor(private service: DemandeDocumentAdminService , private employeService: EmployeAdminService, private typeDocumentService: TypeDocumentAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.typeDocumentService.findAll().subscribe((data) => this.typeDocuments = data);
    }

    public prepareEdit() {
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new DemandeDocumentDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validDemandeDocumentRef = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeDocumentRef();
    }

    public validateDemandeDocumentRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validDemandeDocumentRef = false;
        } else {
            this.validDemandeDocumentRef = true;
        }
    }




   public async openCreateTypeDocument(typeDocument: string) {
        const isPermistted = await this.roleService.isPermitted('TypeDocument', 'edit');
        if (isPermistted) {
             this.typeDocument = new TypeDocumentDto();
             this.createTypeDocumentDialog = true;
        }else {
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
    get createEmployeDialog(): boolean {
        return this.employeService.createDialog;
    }
    set createEmployeDialog(value: boolean) {
        this.employeService.createDialog= value;
    }


    get validDemandeDocumentRef(): boolean {
        return this._validDemandeDocumentRef;
    }
    set validDemandeDocumentRef(value: boolean) {
        this._validDemandeDocumentRef = value;
    }


	get items(): Array<DemandeDocumentDto> {
        return this.service.items;
    }

    set items(value: Array<DemandeDocumentDto>) {
        this.service.items = value;
    }

    get item(): DemandeDocumentDto {
        return this.service.item;
    }

    set item(value: DemandeDocumentDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): DemandeDocumentCriteria {
        return this.service.criteria;
    }

    set criteria(value: DemandeDocumentCriteria) {
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
