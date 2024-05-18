import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EntiteAdminCriteria} from './EntiteAdminCriteria.model';
import {DiplomeCriteria} from './DiplomeCriteria.model';

export class EmployeCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public username: string;
    public usernameLike: string;
    public nom: string;
    public nomLike: string;
    public password: string;
    public passwordLike: string;
    public salaire: number;
    public salaireMin: number;
    public salaireMax: number;

}
