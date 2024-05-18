import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EmployeCriteria} from '../commun/EmployeCriteria.model';
import {TypeDocumentCriteria} from './TypeDocumentCriteria.model';

export class DemandeDocumentCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;

}
