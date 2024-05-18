import {Component} from '@angular/core';
import {EmployeAdminService} from "../../../shared/service/admin/commun/EmployeAdmin.service";

@Component({
    selector: 'app-dashboard-admin',
    templateUrl: './dashboard-admin.component.html',
    styleUrls: ['./dashboard-admin.component.scss']
})

export class DashboardAdminComponent {
    constructor(private employeAdminService : EmployeAdminService) {

    }
    productStockData = {
        labels: ['Informatique', 'Ressources humains', 'Finance', 'Administration', 'Communication'],
        datasets: [
            {
                data: [34, 65, 54, 98, 9],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF']
            }
        ]
    };

    productStockOptions = {
        title: {
            display: true,
            text: 'État du stock de produits'
        },
        legend: {
            position: 'right'
        }
    };
    barChartData = {
        labels: ['Informatique', 'Ressources humains', 'Finance', 'Administration', 'Communication'],
        datasets: [
            {
                label: 'Employes',
                data: [34, 65, 54, 98, 9],
                backgroundColor: '#36A2EB'
            },

        ]
    };

    barChartOptions = {
        title: {
            display: true,
            text: 'Nombres des employes par departement'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

}
