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




import {EntiteAdminEmployeService} from 'src/app/shared/service/employe/commun/EntiteAdminEmploye.service';
import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminCriteria} from 'src/app/shared/criteria/commun/EntiteAdminCriteria.model';


import {DiplomeDto} from 'src/app/shared/model/commun/Diplome.model';
import {DiplomeEmployeService} from 'src/app/shared/service/employe/commun/DiplomeEmploye.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeEmployeService} from 'src/app/shared/service/employe/commun/EmployeEmploye.service';

@Component({
  selector: 'app-entite-admin-edit-employe',
  templateUrl: './entite-admin-edit-employe.component.html'
})
export class EntiteAdminEditEmployeComponent implements OnInit {

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


    private _employesElement = new EmployeDto();

    private _validEntiteAdminRef = true;
    private _validEntiteAdminDepartement = true;




    constructor(private service: EntiteAdminEmployeService , private diplomeService: DiplomeEmployeService, private employeService: EmployeEmployeService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.employesElement.diplome = new DiplomeDto();
        this.diplomeService.findAll().subscribe((data) => this.diplomes = data);

        this.employeService.findAll().subscribe((data) => this.chefDeparts = data);
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
            this.item = new EntiteAdminDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public validateEmployes(){
        this.errorMessages = new Array();
    }

    public setValidation(value: boolean){
        this.validEntiteAdminRef = value;
        this.validEntiteAdminDepartement = value;
    }

   public addEmployes() {
        if( this.item.employes == null )
            this.item.employes = new Array<EmployeDto>();
       this.validateEmployes();
       if (this.errorMessages.length === 0) {
            if(this.employesElement.id == null){
                this.item.employes.push(this.employesElement);
            }else{
                const index = this.item.employes.findIndex(e => e.id == this.employesElement.id);
                this.item.employes[index] = this.employesElement;
            }
          this.employesElement = new EmployeDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteEmployes(p: EmployeDto) {
        this.item.employes.forEach((element, index) => {
            if (element === p) { this.item.employes.splice(index, 1); }
        });
    }

    public editEmployes(p: EmployeDto) {
        this.employesElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEntiteAdminRef();
        this.validateEntiteAdminDepartement();
    }

    public validateEntiteAdminRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validEntiteAdminRef = false;
        } else {
            this.validEntiteAdminRef = true;
        }
    }

    public validateEntiteAdminDepartement(){
        if (this.stringUtilService.isEmpty(this.item.departement)) {
            this.errorMessages.push('Departement non valide');
            this.validEntiteAdminDepartement = false;
        } else {
            this.validEntiteAdminDepartement = true;
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
   public async openCreateChefDepart(chefDepart: string) {
        const isPermistted = await this.roleService.isPermitted('Employe', 'edit');
        if (isPermistted) {
             this.chefDepart = new EmployeDto();
             this.createChefDepartDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
    get chefDepart(): EmployeDto {
        return this.employeService.item;
    }
    set chefDepart(value: EmployeDto) {
        this.employeService.item = value;
    }
    get chefDeparts(): Array<EmployeDto> {
        return this.employeService.items;
    }
    set chefDeparts(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }
    get createChefDepartDialog(): boolean {
        return this.employeService.createDialog;
    }
    set createChefDepartDialog(value: boolean) {
        this.employeService.createDialog= value;
    }

    get employesElement(): EmployeDto {
        if( this._employesElement == null )
            this._employesElement = new EmployeDto();
         return this._employesElement;
    }

    set employesElement(value: EmployeDto) {
        this._employesElement = value;
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


	get items(): Array<EntiteAdminDto> {
        return this.service.items;
    }

    set items(value: Array<EntiteAdminDto>) {
        this.service.items = value;
    }

    get item(): EntiteAdminDto {
        return this.service.item;
    }

    set item(value: EntiteAdminDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): EntiteAdminCriteria {
        return this.service.criteria;
    }

    set criteria(value: EntiteAdminCriteria) {
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
