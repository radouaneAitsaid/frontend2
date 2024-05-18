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




import {MandatEmployeService} from 'src/app/shared/service/employe/Mandat/MandatEmploye.service';
import {MandatDto} from 'src/app/shared/model/Mandat/Mandat.model';
import {MandatCriteria} from 'src/app/shared/criteria/Mandat/MandatCriteria.model';


import {ResponsabiliteDto} from 'src/app/shared/model/Mandat/Responsabilite.model';
import {ResponsabiliteEmployeService} from 'src/app/shared/service/employe/Mandat/ResponsabiliteEmploye.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeEmployeService} from 'src/app/shared/service/employe/commun/EmployeEmploye.service';

@Component({
  selector: 'app-mandat-edit-employe',
  templateUrl: './mandat-edit-employe.component.html'
})
export class MandatEditEmployeComponent implements OnInit {

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



    private _validMandatRef = true;
    private _validMandatEmploye = true;

    private _validResponsabiliteRef = true;
    private _validResponsabiliteNom = true;



    constructor(private service: MandatEmployeService , private responsabiliteService: ResponsabiliteEmployeService, private employeService: EmployeEmployeService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.responsabiliteService.findAll().subscribe((data) => this.responsabilites = data);
    }

    public prepareEdit() {
        this.item.dateDebut = this.service.format(this.item.dateDebut);
        this.item.dateFin = this.service.format(this.item.dateFin);
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
            this.item = new MandatDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validMandatRef = value;
        this.validMandatEmploye = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateMandatRef();
        this.validateMandatEmploye();
    }

    public validateMandatRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validMandatRef = false;
        } else {
            this.validMandatRef = true;
        }
    }

    public validateMandatEmploye(){
        if (this.stringUtilService.isEmpty(this.item.employe)) {
            this.errorMessages.push('Employe non valide');
            this.validMandatEmploye = false;
        } else {
            this.validMandatEmploye = true;
        }
    }





    get responsabilite(): ResponsabiliteDto {
        return this.responsabiliteService.item;
    }
    set responsabilite(value: ResponsabiliteDto) {
        this.responsabiliteService.item = value;
    }
    get responsabilites(): Array<ResponsabiliteDto> {
        return this.responsabiliteService.items;
    }
    set responsabilites(value: Array<ResponsabiliteDto>) {
        this.responsabiliteService.items = value;
    }
    get createResponsabiliteDialog(): boolean {
        return this.responsabiliteService.createDialog;
    }
    set createResponsabiliteDialog(value: boolean) {
        this.responsabiliteService.createDialog= value;
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


    get validMandatRef(): boolean {
        return this._validMandatRef;
    }
    set validMandatRef(value: boolean) {
        this._validMandatRef = value;
    }
    get validMandatEmploye(): boolean {
        return this._validMandatEmploye;
    }
    set validMandatEmploye(value: boolean) {
        this._validMandatEmploye = value;
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

	get items(): Array<MandatDto> {
        return this.service.items;
    }

    set items(value: Array<MandatDto>) {
        this.service.items = value;
    }

    get item(): MandatDto {
        return this.service.item;
    }

    set item(value: MandatDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): MandatCriteria {
        return this.service.criteria;
    }

    set criteria(value: MandatCriteria) {
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
