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



import {AvancementEmployeService} from 'src/app/shared/service/employe/avancement/AvancementEmploye.service';
import {AvancementDto} from 'src/app/shared/model/avancement/Avancement.model';
import {AvancementCriteria} from 'src/app/shared/criteria/avancement/AvancementCriteria.model';
import {EchelonDto} from 'src/app/shared/model/avancement/Echelon.model';
import {EchelonEmployeService} from 'src/app/shared/service/employe/avancement/EchelonEmploye.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeEmployeService} from 'src/app/shared/service/employe/commun/EmployeEmploye.service';
@Component({
  selector: 'app-avancement-create-employe',
  templateUrl: './avancement-create-employe.component.html'
})
export class AvancementCreateEmployeComponent  implements OnInit {

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



   private _validAvancementRef = true;
   private _validAvancementEmploye = true;
    private _validEchelleAncienRef = true;
    private _validEchelleAncienLibelle = true;
    private _validEchelleNouveauRef = true;
    private _validEchelleNouveauLibelle = true;

	constructor(private service: AvancementEmployeService , private echelonService: EchelonEmployeService, private employeService: EmployeEmployeService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.echelonService.findAll().subscribe((data) => this.echelleAnciens = data);
        this.echelonService.findAll().subscribe((data) => this.echelleNouveaus = data);
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
                this.item = new AvancementDto();
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
        this.validAvancementRef = value;
        this.validAvancementEmploye = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAvancementRef();
        this.validateAvancementEmploye();
    }

    public validateAvancementRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validAvancementRef = false;
        } else {
            this.validAvancementRef = true;
        }
    }
    public validateAvancementEmploye(){
        if (this.stringUtilService.isEmpty(this.item.employe)) {
        this.errorMessages.push('Employe non valide');
        this.validAvancementEmploye = false;
        } else {
            this.validAvancementEmploye = true;
        }
    }


    public async openCreateEchelleAncien(echelleAncien: string) {
    const isPermistted = await this.roleService.isPermitted('Echelon', 'add');
    if(isPermistted) {
         this.echelleAncien = new EchelonDto();
         this.createEchelleAncienDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateEchelleNouveau(echelleNouveau: string) {
    const isPermistted = await this.roleService.isPermitted('Echelon', 'add');
    if(isPermistted) {
         this.echelleNouveau = new EchelonDto();
         this.createEchelleNouveauDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get echelleAncien(): EchelonDto {
        return this.echelonService.item;
    }
    set echelleAncien(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelleAnciens(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelleAnciens(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get createEchelleAncienDialog(): boolean {
        return this.echelonService.createDialog;
    }
    set createEchelleAncienDialog(value: boolean) {
        this.echelonService.createDialog= value;
    }
    get echelleNouveau(): EchelonDto {
        return this.echelonService.item;
    }
    set echelleNouveau(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelleNouveaus(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelleNouveaus(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get createEchelleNouveauDialog(): boolean {
        return this.echelonService.createDialog;
    }
    set createEchelleNouveauDialog(value: boolean) {
        this.echelonService.createDialog= value;
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



    get validAvancementRef(): boolean {
        return this._validAvancementRef;
    }

    set validAvancementRef(value: boolean) {
         this._validAvancementRef = value;
    }
    get validAvancementEmploye(): boolean {
        return this._validAvancementEmploye;
    }

    set validAvancementEmploye(value: boolean) {
         this._validAvancementEmploye = value;
    }

    get validEchelleAncienRef(): boolean {
        return this._validEchelleAncienRef;
    }
    set validEchelleAncienRef(value: boolean) {
        this._validEchelleAncienRef = value;
    }
    get validEchelleAncienLibelle(): boolean {
        return this._validEchelleAncienLibelle;
    }
    set validEchelleAncienLibelle(value: boolean) {
        this._validEchelleAncienLibelle = value;
    }
    get validEchelleNouveauRef(): boolean {
        return this._validEchelleNouveauRef;
    }
    set validEchelleNouveauRef(value: boolean) {
        this._validEchelleNouveauRef = value;
    }
    get validEchelleNouveauLibelle(): boolean {
        return this._validEchelleNouveauLibelle;
    }
    set validEchelleNouveauLibelle(value: boolean) {
        this._validEchelleNouveauLibelle = value;
    }


    get items(): Array<AvancementDto> {
        return this.service.items;
    }

    set items(value: Array<AvancementDto>) {
        this.service.items = value;
    }

    get item(): AvancementDto {
        return this.service.item;
    }

    set item(value: AvancementDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): AvancementCriteria {
        return this.service.criteria;
    }

    set criteria(value: AvancementCriteria) {
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
