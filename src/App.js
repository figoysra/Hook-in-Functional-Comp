import './App.css';
import { useState, createContext, useEffect } from 'react'
import Body from './components/Body'
// import Products from './components/Products';
// provider parent consumer child
// provider mengelolah data dan consumer menampilkan data

export const ThemeContext = createContext()

function App() {
  // semua fungsi ditaruh disini
  // const [name, setName] = useState('Jordan')
  // const [alamat, setAlamat]= useState('Hokaido')
  
  // const [data, setData] =useState({
  //   name : '',
  //   alamat : '',
  //   phone : '',
  //   hobby : ['a']
  // })
  // // setname usestate sebuah function
  // // nama function di line 9 tidak boleh sama dengan setname
  // // nambahin data di setData

  // const changeName = () =>{
  //   // tentuin value apa
  //   setData({
  //     ...data,
  //     name : 'figo'
  //   })
  //   // setName('Josh')
  // }
  // const changeAlamat = ()=>{
  //   setData({
  //     ...data,
  //     alamat: 'Malang'
  //   })
  //   // setAlamat('Jepang')
  // }

  // const changePhone = ()=>{
  //   setData({
  //     ...data,
  //     phone: '0812xx'
  //   })
  // }
  
  // const addHobby = ()=>{
  //     setData({
  //       ...data,
  //       hobby: [...data.hobby, 'asd']
  //     })
  //   }
  // const obj = {
  //   color: 'Red',
  //   greating: 'selamat pagi',
  //   data: [1,2,3]
  // }
  // useEffect(()=>{
  //   console.log('Mounting')
  // }[])

  // useEffect(()=>{
  //   console.log('UDah')
  // }[data.name])
  const [listProduct, setListProduct] = useState([])
  useEffect(()=>{
    setListProduct(
      [{id : 1, menu: 'Ayam Goreng', price:'15000'}, {id: 2, menu: 'Lele Goreng', price:'12000'}, 
      {id: 3, menu: 'Bebek Goreng', price:'17000'}])
  },[])

  return (
    <div className="App">
      <ThemeContext.Provider value={listProduct}>
        <Body image={'https://1.bp.blogspot.com/-wEPRJ7g69R0/XcFijkbkAjI/AAAAAAAAMZ8/Ce5nqlcKIUUUxkrfSZOE1dMJH4wij9-EACLcBGAsYHQ/s1600/Desain%2BSpanduk%2BPecel%2BLele%2BCDR.jpg'} />
      </ThemeContext.Provider>
      {/* <h1>Hello World</h1>
      {data.name}<br />
      <button type="" onClick={changeName}>Change Name</button>
      <br />
      {data.alamat} <br />
      <button type="" onClick={changeAlamat}>Change Alamat</button>
      <br />
      {data.phone} <br />
      <button type="" onClick={changePhone}>Change Phone</button>
      <br />
      {data.hobby} <br />
      <button type="" onClick={addHobby }>Add Hobby</button>
      <br />
      <ThemeContext.Provider value={obj}>
        <Products />
      </ThemeContext.Provider> */}
      
    </div>
  );
}

export default App;
