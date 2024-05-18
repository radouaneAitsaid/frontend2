
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginEmployeComponent } from './login-employe/login-employe.component';
import { RegisterEmployeComponent } from './register-employe/register-employe.component';

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
                                    component: LoginEmployeComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterEmployeComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'avancement',
                            loadChildren: () => import('./view/avancement/avancement-employe-routing.module').then(x => x.AvancementEmployeRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'Mandat',
                            loadChildren: () => import('./view/Mandat/Mandat-employe-routing.module').then(x => x.MandatEmployeRoutingModule),
                            canActivate: [AuthGuard],
                        },

                        {
                            path: 'commun',
                            loadChildren: () => import('./view/commun/commun-employe-routing.module').then(x => x.CommunEmployeRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'demande',
                            loadChildren: () => import('./view/demande/demande-employe-routing.module').then(x => x.DemandeEmployeRoutingModule),
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
export class EmployeRoutingModule { }
