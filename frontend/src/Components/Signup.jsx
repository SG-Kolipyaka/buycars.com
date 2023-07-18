import React from 'react'
import "../css/signup.css"

const Signup = () => {
  return (
    <div style={{border:"1px solid pink",backgroundColor:"pink",width:"50%",margin:"auto",height:"450px"}}>
      <h2 className='h21'> Signup Form</h2>
      <form className="form1" >
      <label>
        Name:
        <input
          type="text"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
     
      <label>
        Age:
        <input
          type="text"
          name="age"
          // value={formData.age}
          // onChange={handleChange}
          placeholder="Enter your age"
        />
      </label>
     
      <label>
        Address:
        <input
          type="text"
          name="address"
          // value={formData.address}
          // onChange={handleChange}
          placeholder="Enter your address"
        />
      </label>
     
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          // value={formData.phoneNumber}
          // onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </label>
     
      <label>
        City:
        <input
          type="text"
          name="city"
          // value={formData.city}
          // onChange={handleChange}
          placeholder="Enter your city"
        />
      </label>
     
      <label>
        Email:
        <input
          type="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          placeholder="Enter your email"
        />
      </label>
     
      <label>
        Password:
        <input
          type="password"
          name="password"
          // value={formData.password}
          // onChange={handleChange}
          placeholder="Enter your password"
        />
      </label>
     
      <input type="submit"  />
    </form>
    </div>
  );
  
  
}

export default Signup