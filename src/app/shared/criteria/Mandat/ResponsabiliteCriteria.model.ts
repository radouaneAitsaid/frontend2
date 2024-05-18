import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EchelonCriteria} from '../avancement/EchelonCriteria.model';

export class ResponsabiliteCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public nom: string;
    public nomLike: string;

}
