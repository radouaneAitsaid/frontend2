import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EntiteAdminDto} from './EntiteAdmin.model';
import {DiplomeDto} from './Diplome.model';

export class EmployeDto extends BaseDto{

    public ref: string;

    public username: string;

    public nom: string;

    public password: string;

    public salaire: null | number;

    public diplome: DiplomeDto ;
    public entiteAdmin: EntiteAdminDto ;


    constructor() {
        super();

        this.ref = '';
        this.username = '';
        this.nom = '';
        this.password = '';
        this.salaire = null;

    }

}
