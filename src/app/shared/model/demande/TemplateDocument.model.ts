import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeDocumentDto} from './TypeDocument.model';

export class TemplateDocumentDto extends BaseDto{

    public ref: string;

    public contenu: string;

    public typeDocument: TypeDocumentDto ;
    

    constructor() {
        super();

        this.ref = '';
        this.contenu = '';

        }

}
