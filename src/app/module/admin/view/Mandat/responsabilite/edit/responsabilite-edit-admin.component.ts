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




import {ResponsabiliteAdminService} from 'src/app/shared/service/admin/Mandat/ResponsabiliteAdmin.service';
import {ResponsabiliteDto} from 'src/app/shared/model/Mandat/Responsabilite.model';
import {ResponsabiliteCriteria} from 'src/app/shared/criteria/Mandat/ResponsabiliteCriteria.model';


import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/shared/service/admin/avancement/EchelonAdmin.service';

@Component({
  selector: 'app-responsabilite-edit-admin',
  templateUrl: './responsabilite-edit-admin.component.html'
})
export class ResponsabiliteEditAdminComponent implements OnInit {

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



    private _validResponsabiliteRef = true;
    private _validResponsabiliteNom = true;

    private _validEchelonMinRef = true;
    private _validEchelonMinLibelle = true;



    constructor(private service: ResponsabiliteAdminService , private echelonService: EchelonAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.echelonService.findAll().subscribe((data) => this.echelonMins = data);
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
            this.item = new ResponsabiliteDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validResponsabiliteRef = value;
        this.validResponsabiliteNom = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateResponsabiliteRef();
        this.validateResponsabiliteNom();
    }

    public validateResponsabiliteRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validResponsabiliteRef = false;
        } else {
            this.validResponsabiliteRef = true;
        }
    }

    public validateResponsabiliteNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validResponsabiliteNom = false;
        } else {
            this.validResponsabiliteNom = true;
        }
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
    get createEchelonMinDialog(): boolean {
        return this.echelonService.createDialog;
    }
    set createEchelonMinDialog(value: boolean) {
        this.echelonService.createDialog= value;
    }


    get validResponsabiliteRef(): boolean {
        return this._validResponsabiliteRef;
    }
    set validResponsabiliteRef(value: boolean) {
        this._validResponsabiliteRef = value;
    }
    get validResponsabiliteNom(): boolean {
        return this._validResponsabiliteNom;
    }
    set validResponsabiliteNom(value: boolean) {
        this._validResponsabiliteNom = value;
    }

    get validEchelonMinRef(): boolean {
        return this._validEchelonMinRef;
    }
    set validEchelonMinRef(value: boolean) {
        this._validEchelonMinRef = value;
    }
    get validEchelonMinLibelle(): boolean {
        return this._validEchelonMinLibelle;
    }
    set validEchelonMinLibelle(value: boolean) {
        this._validEchelonMinLibelle = value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): ResponsabiliteCriteria {
        return this.service.criteria;
    }

    set criteria(value: ResponsabiliteCriteria) {
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
