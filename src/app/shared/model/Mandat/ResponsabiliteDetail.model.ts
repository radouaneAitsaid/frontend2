import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ResponsabiliteDto} from './Responsabilite.model';

export class ResponsabiliteDetailDto extends BaseDto{

    public ref: string;

   public dateApplicationMin: Date;

   public dateApplicationMax: Date;

    public salaire: null | number;

    public responsabilite: ResponsabiliteDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.dateApplicationMin = null;
        this.dateApplicationMax = null;
        this.salaire = null;

        }

}
