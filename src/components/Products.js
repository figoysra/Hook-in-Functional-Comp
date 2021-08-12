// import Card from './Card'
import { ThemeContext } from '../App'
import { useContext } from "react"

const Products = ({backgroundColor}) =>{
    const context = useContext(ThemeContext)
    // const obj = {
    //     data : [5]
    // }
    console.log(typeof context)
    return(
        <div>
            <h1>Daftar Menu Pecel Lele</h1>
            {/* <ThemeContext.Provider value = {obj}>
                <Card />
            </ThemeContext.Provider> */}
            
            {/* <ThemeContext.Consumer>
                {
                    (value) => (
                        <div>
                            {value.greating}
                        </div>
                    )
                }
            </ThemeContext.Consumer> */}
            <table style = {{border: '1px solid black', width : '100%', textAlign :'center'}}>
                <tr style = {{backgroundColor}}>
                    <th style = {{border: '1px solid black'}}>No</th>
                    <th style = {{border: '1px solid black'}}>Menu</th>
                    <th style = {{border: '1px solid black'}}>Harga</th>
                </tr>
                {context.map((e,i)=>(
                    <tr key={i}>
                        <td style = {{border: '1px solid black'}}>{e.id}</td>
                        <td style = {{border: '1px solid black'}}>{e.menu}</td>
                        <td style = {{border: '1px solid black'}}>{e.price}</td>
                    </tr>
                ))}
                
            </table>
        </div>
        

    )
}
export default Products