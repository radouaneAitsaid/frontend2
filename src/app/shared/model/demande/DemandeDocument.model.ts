import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EmployeDto} from '../commun/Employe.model';
import {TypeDocumentDto} from './TypeDocument.model';

export class DemandeDocumentDto extends BaseDto{

    public ref: string;

    public employe: EmployeDto ;
    public typeDocument: TypeDocumentDto ;
    

    constructor() {
        super();

        this.ref = '';

        }

}
