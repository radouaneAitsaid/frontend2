import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EmployeDto} from './Employe.model';

export class EntiteAdminDto extends BaseDto{

    public ref: string;

    public departement: string;

    public chefDepart: EmployeDto ;
     public employes: Array<EmployeDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.departement = '';
        this.chefDepart = new EmployeDto() ;
        this.employes = new Array<EmployeDto>();

        }

}
