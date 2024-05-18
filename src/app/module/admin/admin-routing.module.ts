
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'dashboard',
                            children: [
                                {
                                    path: '',
                                    component: DashboardAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'avancement',
                            loadChildren: () => import('./view/avancement/avancement-admin-routing.module').then(x => x.AvancementAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Mandat',
                            loadChildren: () => import('./view/Mandat/Mandat-admin-routing.module').then(x => x.MandatAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },

                        {
                            path: 'commun',
                            loadChildren: () => import('./view/commun/commun-admin-routing.module').then(x => x.CommunAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'demande',
                            loadChildren: () => import('./view/demande/demande-admin-routing.module').then(x => x.DemandeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
