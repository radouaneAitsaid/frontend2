import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EchelonDto} from '../avancement/Echelon.model';

export class DiplomeDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public echelon: EchelonDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';

        }

}
