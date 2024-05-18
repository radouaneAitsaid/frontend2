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



import {EchelonEmployeService} from 'src/app/shared/service/employe/avancement/EchelonEmploye.service';
import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonCriteria} from 'src/app/shared/criteria/avancement/EchelonCriteria.model';
import {EchelleDto} from 'src/app/shared/model/avancement/Echelle.model';
import {EchelleEmployeService} from 'src/app/shared/service/employe/avancement/EchelleEmploye.service';
@Component({
  selector: 'app-echelon-create-employe',
  templateUrl: './echelon-create-employe.component.html'
})
export class EchelonCreateEmployeComponent  implements OnInit {

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



   private _validEchelonRef = true;
   private _validEchelonLibelle = true;
    private _validEchelleRef = true;
    private _validEchelleLibelle = true;

	constructor(private service: EchelonEmployeService , private echelleService: EchelleEmployeService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
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
                this.item = new EchelonDto();
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
        this.validEchelonRef = value;
        this.validEchelonLibelle = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEchelonRef();
        this.validateEchelonLibelle();
    }

    public validateEchelonRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEchelonRef = false;
        } else {
            this.validEchelonRef = true;
        }
    }
    public validateEchelonLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEchelonLibelle = false;
        } else {
            this.validEchelonLibelle = true;
        }
    }


    public async openCreateEchelle(echelle: string) {
    const isPermistted = await this.roleService.isPermitted('Echelle', 'add');
    if(isPermistted) {
         this.echelle = new EchelleDto();
         this.createEchelleDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get echelle(): EchelleDto {
        return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }
    get createEchelleDialog(): boolean {
        return this.echelleService.createDialog;
    }
    set createEchelleDialog(value: boolean) {
        this.echelleService.createDialog= value;
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

    get validEchelleRef(): boolean {
        return this._validEchelleRef;
    }
    set validEchelleRef(value: boolean) {
        this._validEchelleRef = value;
    }
    get validEchelleLibelle(): boolean {
        return this._validEchelleLibelle;
    }
    set validEchelleLibelle(value: boolean) {
        this._validEchelleLibelle = value;
    }


    get items(): Array<EchelonDto> {
        return this.service.items;
    }

    set items(value: Array<EchelonDto>) {
        this.service.items = value;
    }

    get item(): EchelonDto {
        return this.service.item;
    }

    set item(value: EchelonDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): EchelonCriteria {
        return this.service.criteria;
    }

    set criteria(value: EchelonCriteria) {
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
