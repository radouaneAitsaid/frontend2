import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EchelonCriteria} from './EchelonCriteria.model';
import {EmployeCriteria} from '../commun/EmployeCriteria.model';

export class AvancementCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
     public salaireAjoute: number;
     public salaireAjouteMin: number;
     public salaireAjouteMax: number;
  public employe: EmployeCriteria ;
  public employes: Array<EmployeCriteria> ;
  public echelleAncien: EchelonCriteria ;
  public echelleAnciens: Array<EchelonCriteria> ;
  public echelleNouveau: EchelonCriteria ;
  public echelleNouveaus: Array<EchelonCriteria> ;

}
