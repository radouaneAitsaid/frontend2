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




import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/commun/EmployeCriteria.model';


import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {DiplomeDto} from 'src/app/shared/model/commun/Diplome.model';
import {DiplomeAdminService} from 'src/app/shared/service/admin/commun/DiplomeAdmin.service';

@Component({
  selector: 'app-employe-edit-admin',
  templateUrl: './employe-edit-admin.component.html'
})
export class EmployeEditAdminComponent implements OnInit {

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




    private _validDiplomeRef = true;
    private _validDiplomeLibelle = true;
    private _validEntiteAdminRef = true;
    private _validEntiteAdminDepartement = true;



    constructor(private service: EmployeAdminService , private entiteAdminService: EntiteAdminAdminService, private diplomeService: DiplomeAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.diplomeService.findAll().subscribe((data) => this.diplomes = data);
        this.entiteAdminService.findAll().subscribe((data) => this.entiteAdmins = data);
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
            this.item = new EmployeDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   public async openCreateEntiteAdmin(entiteAdmin: string) {
        const isPermistted = await this.roleService.isPermitted('EntiteAdmin', 'edit');
        if (isPermistted) {
             this.entiteAdmin = new EntiteAdminDto();
             this.createEntiteAdminDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateDiplome(diplome: string) {
        const isPermistted = await this.roleService.isPermitted('Diplome', 'edit');
        if (isPermistted) {
             this.diplome = new DiplomeDto();
             this.createDiplomeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
    get createEntiteAdminDialog(): boolean {
        return this.entiteAdminService.createDialog;
    }
    set createEntiteAdminDialog(value: boolean) {
        this.entiteAdminService.createDialog= value;
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
    get createDiplomeDialog(): boolean {
        return this.diplomeService.createDialog;
    }
    set createDiplomeDialog(value: boolean) {
        this.diplomeService.createDialog= value;
    }



    get validDiplomeRef(): boolean {
        return this._validDiplomeRef;
    }
    set validDiplomeRef(value: boolean) {
        this._validDiplomeRef = value;
    }
    get validDiplomeLibelle(): boolean {
        return this._validDiplomeLibelle;
    }
    set validDiplomeLibelle(value: boolean) {
        this._validDiplomeLibelle = value;
    }
    get validEntiteAdminRef(): boolean {
        return this._validEntiteAdminRef;
    }
    set validEntiteAdminRef(value: boolean) {
        this._validEntiteAdminRef = value;
    }
    get validEntiteAdminDepartement(): boolean {
        return this._validEntiteAdminDepartement;
    }
    set validEntiteAdminDepartement(value: boolean) {
        this._validEntiteAdminDepartement = value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): EmployeCriteria {
        return this.service.criteria;
    }

    set criteria(value: EmployeCriteria) {
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