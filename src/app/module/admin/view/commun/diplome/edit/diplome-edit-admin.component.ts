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




import {DiplomeAdminService} from 'src/app/shared/service/admin/commun/DiplomeAdmin.service';
import {DiplomeDto} from 'src/app/shared/model/commun/Diplome.model';
import {DiplomeCriteria} from 'src/app/shared/criteria/commun/DiplomeCriteria.model';


import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonAdminService} from 'src/app/shared/service/admin/avancement/EchelonAdmin.service';

@Component({
  selector: 'app-diplome-edit-admin',
  templateUrl: './diplome-edit-admin.component.html'
})
export class DiplomeEditAdminComponent implements OnInit {

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

    private _validEchelonRef = true;
    private _validEchelonLibelle = true;



    constructor(private service: DiplomeAdminService , private echelonService: EchelonAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.echelonService.findAll().subscribe((data) => this.echelons = data);
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
            this.item = new DiplomeDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validDiplomeRef = value;
        this.validDiplomeLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDiplomeRef();
        this.validateDiplomeLibelle();
    }

    public validateDiplomeRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validDiplomeRef = false;
        } else {
            this.validDiplomeRef = true;
        }
    }

    public validateDiplomeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validDiplomeLibelle = false;
        } else {
            this.validDiplomeLibelle = true;
        }
    }





    get echelon(): EchelonDto {
        return this.echelonService.item;
    }
    set echelon(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelons(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get createEchelonDialog(): boolean {
        return this.echelonService.createDialog;
    }
    set createEchelonDialog(value: boolean) {
        this.echelonService.createDialog= value;
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

    get validEchelonRef(): boolean {
        return this._validEchelonRef;
    }
    set validEchelonRef(value: boolean) {
        this._validEchelonRef = value;
    }
    get validEchelonLibelle(): boolean {
        return this._validEchelonLibelle;
    }
    set validEchelonLibelle(value: boolean) {
        this._validEchelonLibelle = value;
    }

	get items(): Array<DiplomeDto> {
        return this.service.items;
    }

    set items(value: Array<DiplomeDto>) {
        this.service.items = value;
    }

    get item(): DiplomeDto {
        return this.service.item;
    }

    set item(value: DiplomeDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): DiplomeCriteria {
        return this.service.criteria;
    }

    set criteria(value: DiplomeCriteria) {
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
