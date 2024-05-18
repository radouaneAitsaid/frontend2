import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ResponsabiliteCriteria} from './ResponsabiliteCriteria.model';

export class ResponsabiliteDetailCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public dateApplicationMin: Date;
    public dateApplicationMinFrom: Date;
    public dateApplicationMinTo: Date;
    public dateApplicationMax: Date;
    public dateApplicationMaxFrom: Date;
    public dateApplicationMaxTo: Date;
     public salaire: number;
     public salaireMin: number;
     public salaireMax: number;

}
