import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EchelleDto extends BaseDto{

    public ref: string;

    public libelle: string;

    

    constructor() {
        super();

        this.ref = '';
        this.libelle = '';

        }

}
