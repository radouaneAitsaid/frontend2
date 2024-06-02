import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    model: any[];
    modelanonymous: any[];
    modelAdmin: any[];
    modelEmploye: any[];
    constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
    ngOnInit() {
        this.modelAdmin =
            [

                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'dashboard',
                            icon: 'pi pi-home',
                            routerLink: ['/app/admin/dashboard']
                        },
                        {
                            label: 'Ressources humaines',
                            icon: 'pi pi-users',
                            items: [
                                {
                                    label: 'Liste employe',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/commun/employe/list']
                                },
                                {
                                    label: 'Liste entite admin',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/commun/entite-admin/list']
                                },
                            ]
                        },
                        {
                            label: 'Gestion Responsibilite',
                            icon: 'pi pi-wallet',
                            items: [
                                {
                                    label: 'Liste mandat',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/Mandat/mandat/list']
                                },
                                {
                                    label: 'Liste responsabilite detail',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/Mandat/responsabilite-detail/list']
                                },
                                {
                                    label: 'Liste responsabilite',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/Mandat/responsabilite/list']
                                },
                            ]
                        },

                        {
                            label: 'Gestion Echelle',
                            icon: 'pi pi-chart-line',
                            items: [
                                {
                                    label: 'Liste echelon',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/avancement/echelon/list']
                                },
                                {
                                    label: 'Liste avancement',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/avancement/avancement/list']
                                },
                                {
                                    label: 'Liste echelle',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/avancement/echelle/list']
                                },
                            ]
                        },
                        {
                            label: 'Gestion Documents',
                            icon: 'pi pi-file',
                            items: [
                                {
                                    label: 'Liste diplome',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/commun/diplome/list']
                                },
                                {
                                    label: 'Liste etat demande document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/demande/etat-demande-document/list']
                                },
                                {
                                    label: 'Liste template document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/demande/template-document/list']
                                },
                                {
                                    label: 'Liste demande document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/demande/demande-document/list']
                                },
                                {
                                    label: 'Liste type document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/demande/type-document/list']
                                },
                            ]
                        },

                        {
                            label: 'Security Management',
                            icon: 'pi pi-key',
                            items: [
                                {
                                    label: 'List User',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/security/user/list']
                                },
                                {
                                    label: 'List Model',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/security/model-permission/list']
                                },
                                {
                                    label: 'List Action Permission',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/security/action-permission/list']
                                },
                            ]
                        }
                    ]
                }
            ];
        this.modelEmploye =
            [

                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Gestion Responsibilite',
                            icon: 'pi pi-wallet',
                            items: [
                                {
                                    label: 'Liste mandat',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/Mandat/mandat/list']
                                },
                                {
                                    label: 'Liste responsabilite detail',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/Mandat/responsabilite-detail/list']
                                },
                                {
                                    label: 'Liste responsabilite',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/Mandat/responsabilite/list']
                                },
                            ]
                        },
                        {
                            label: 'Ressources humaines',
                            icon: 'pi pi-users',
                            items: [
                                {
                                    label: 'Liste employe',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/commun/employe/list']
                                },
                                {
                                    label: 'Liste entite admin',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/commun/entite-admin/list']
                                },
                            ]
                        },
                        {
                            label: 'Gestion Echelle',
                            icon: 'pi pi-wallet',
                            items: [
                                {
                                    label: 'Liste echelon',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/avancement/echelon/list']
                                },
                                {
                                    label: 'Liste avancement',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/avancement/avancement/list']
                                },
                                {
                                    label: 'Liste echelle',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/avancement/echelle/list']
                                },
                            ]
                        },
                        {
                            label: 'Gestion documents',
                            icon: 'pi pi-wallet',
                            items: [
                                {
                                    label: 'Liste diplome',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/commun/diplome/list']
                                },
                                {
                                    label: 'Liste etat demande document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/demande/etat-demande-document/list']
                                },
                                {
                                    label: 'Liste template document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/demande/template-document/list']
                                },
                                {
                                    label: 'Liste demande document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/demande/demande-document/list']
                                },
                                {
                                    label: 'Liste type document',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/employe/demande/type-document/list']
                                },
                            ]
                        },

                        {
                            label: 'Security Management',
                            icon: 'pi pi-wallet',
                            items: [
                                {
                                    label: 'List User',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/security/user/list']
                                },
                                {
                                    label: 'List Model',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/security/model-permission/list']
                                },
                                {
                                    label: 'List Action Permission',
                                    icon: 'pi pi-fw pi-plus-circle',
                                    routerLink: ['/app/admin/security/action-permission/list']
                                },
                            ]
                        }
                    ]
                }
            ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
                this.authService.authenticatedUser.roleUsers.forEach(role => {
                    const roleName: string = this.getRole(role.role.authority);
                    this.roleService._role.next(roleName.toUpperCase());
                    eval('this.model = this.model' + this.getRole(role.role.authority));
                })
            }
        }
    }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
        if (!word) { return word; }
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
