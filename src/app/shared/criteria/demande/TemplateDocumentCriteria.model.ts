import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {TypeDocumentCriteria} from './TypeDocumentCriteria.model';

export class TemplateDocumentCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public contenu: string;
    public contenuLike: string;

}
