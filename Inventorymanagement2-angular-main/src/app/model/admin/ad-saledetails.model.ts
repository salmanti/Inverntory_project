

export class AdSaledetails{

    public sale_details_id?: number;
    public product_id!: number;
    public  product_name?: string;
    public product_brand?: string;

    public unit_price? :number;
    public quantity? : number;
    public total? : number;
   
    public sale_id?:number;   //FK
    public distributor_id?:number ; //fk

    public product_category?:string;  
		 
    public retail_rate?:number;   // for distribuotr sales
    public mrp?:number;           // for distribuotr sales
    


}







   
 