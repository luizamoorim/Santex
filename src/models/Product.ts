export type Product = {
  id:number, 
  name:string,  
  description:string,
  variants: {
    id:number,
    name:string,
    price:number,
    priceWithTax:number
  }[],
  featuredAsset: {
    id:number
    name:string
    source:string
    preview:string
  },
  assets: {
    id:number
    name:string
    source:string
    preview:string
  }
};