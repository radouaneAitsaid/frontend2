import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EchelleCriteria} from './EchelleCriteria.model';

export class EchelonCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;
     public salaire: number;
     public salaireMin: number;
     public salaireMax: number;

}
