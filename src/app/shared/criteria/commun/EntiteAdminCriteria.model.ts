import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EmployeCriteria} from './EmployeCriteria.model';

export class EntiteAdminCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public departement: string;
    public departementLike: string;
  public chefDepart: EmployeCriteria ;
  public chefDeparts: Array<EmployeCriteria> ;
      public employes: Array<EmployeCriteria>;

}
