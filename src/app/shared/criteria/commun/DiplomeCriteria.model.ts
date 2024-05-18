import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EchelonCriteria} from '../avancement/EchelonCriteria.model';

export class DiplomeCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public libelle: string;
    public libelleLike: string;

}
