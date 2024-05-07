export class DisStock{

    id!:any;
	
    product_id!:number ;
	distributor_id?: number;
	current_quantity!:number;
    total_quantity?:number;

    product_brand!:string;
    product_name!:string
    product_category!:string

    retail_rate!:number    // admin sale rate or distributor purchase,return rate
    mrp!:number


}