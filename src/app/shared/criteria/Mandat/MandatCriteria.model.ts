import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class MandatCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
     public salaire: number;
     public salaireMin: number;
     public salaireMax: number;

}
