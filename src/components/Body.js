import Products from './Products'

const Body = ({image}) =>{
    return(
        <div>
            <img src={image} alt="" width='100%' height='200px' />
            <Products backgroundColor={'grey'} />
        </div>
    )
}
export default Body