




export class AdSale{

    public sale_id?:number;
    public date? :String;
    public status?:String;

    public saller_id? : number;                 //FK
    
    public distributor_id? : number;           //Fk
    public warehouse_id? : number;          //Fk
    public customer_id? : number;          //Fk
    public sale_details_id? : number;      //Fk
   public grand_total?: number;


}

