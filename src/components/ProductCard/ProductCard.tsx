interface Props{
    title:string;
    price?:number;
    image:string;
} 
 
 
 function ProductCard(props:Props){

    const{title,price,image} = props;
    return<div>
        <h2>{title}</h2>
        <img src={image} alt={title} width={"200px"} />
        <p>${price}</p>
    </div>
    
}
export default ProductCard;