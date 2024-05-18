import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EchelleDto} from './Echelle.model';

export class EchelonDto extends BaseDto{

    public ref: string;

    public libelle: string;

    public salaire: null | number;

    public echelle: EchelleDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';
        this.salaire = null;

        }

}
