import React from 'react'
import { NavLink } from 'react-router-dom'


const links=[
    {to:"/",element:"OEMSPEC"},
    {to:"/cars",element:"Cars"},
    {to:"/addcars",element:"AddCars"},
    {to:"/signup",element:"SignUP"},
    {to:"/login",element:"Login"},

]

const activelink={marginLeft:"10px",color:"brown",fontSize:"25px",textDecoration:"none",fontFamily:"cursive"}
const defaultlink={marginLeft:"10px",color:"black",textDecoration:"none",fontFamily:"cursive"}
const mainstyle={backgroundColor:"lightpink",width:"100%",display:"flex",justifyContent:"space-evenly",height:"50px",alignItems:"center",borderBottom:"1px solid black"}

const Navbar = () => {
  return (
    <div style={mainstyle}>
        <div style={{marginLeft:"-180px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVKeG4KcgEUsdb_QA0jXUeTWAC7_GD7cC4g&usqp=CAU" width={"29%"} alt="" />
        {/* <h5 >buyCar.com</h5> */}
        </div>
        {links.map((el)=>{
            return <div>
                <NavLink to={el.to} style={({isActive})=>{
                return isActive?activelink :defaultlink
            }}>{el.element}</NavLink>
            </div>
        })}
    </div>
  )
}

export default Navbar