import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EchelonDto} from '../avancement/Echelon.model';

export class ResponsabiliteDto extends BaseDto{

    public ref: string;

    public nom: string;

    public echelonMin: EchelonDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.nom = '';

        }

}
