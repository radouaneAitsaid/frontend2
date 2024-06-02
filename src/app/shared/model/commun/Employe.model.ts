import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EntiteAdminDto} from './EntiteAdmin.model';
import {DiplomeDto} from './Diplome.model';

export class EmployeDto extends BaseDto{

    public ref: string;

    public username: string;

    public lastName: string;

    public password: string;

    public salaire: null | number;

    public diplome: DiplomeDto ;
    public entiteAdmin: EntiteAdminDto ;


    constructor() {
        super();

        this.ref = '';
        this.username = '';
        this.lastName = '';
        this.password = '';
        this.salaire = null;

    }

}
