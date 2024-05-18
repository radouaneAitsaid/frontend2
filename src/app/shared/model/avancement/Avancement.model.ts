import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EchelonDto} from './Echelon.model';
import {EmployeDto} from '../commun/Employe.model';

export class AvancementDto extends BaseDto{

    public ref: string;

    public salaireAjoute: null | number;

    public employe: EmployeDto ;
    public echelleAncien: EchelonDto ;
    public echelleNouveau: EchelonDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.salaireAjoute = null;
        this.employe = new EmployeDto() ;
        this.echelleAncien = new EchelonDto() ;
        this.echelleNouveau = new EchelonDto() ;

        }

}
