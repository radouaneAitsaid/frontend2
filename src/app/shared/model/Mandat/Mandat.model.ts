import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ResponsabiliteDto} from './Responsabilite.model';
import {EmployeDto} from '../commun/Employe.model';

export class MandatDto extends BaseDto{

    public ref: string;

   public dateDebut: Date;

   public dateFin: Date;

    public salaire: null | number;

    public employe: EmployeDto ;
    public responsabilite: ResponsabiliteDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.dateDebut = null;
        this.dateFin = null;
        this.salaire = null;

        }

}
