import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { UserAuth } from '../context/AuthContext';



const Weather = () => {
  const { logOut, user } = UserAuth();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    const [data , setData] = useState({})
    const [location , setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    const searchLocation = (event) => {
        if(event.key == 'Enter' ){
        axios.get(url).then((response) => {
         
            setData(response.data)
            console.log(response.data)
        }
        

        
        )
        setLocation('')   
    }
    }

  return (
     

    <div>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <p>{user?.email}</p>
      </div>
        <div className='search'>
            <input 
            value={location}
            onChange = {event => setLocation(event.target.value)}
            onKeyPress = {searchLocation}
            placeholder = "Enter Location"
            type = "text"
            />

        </div>
       <div className='location'>
        <p> {data.name} </p>

       </div >

       <div className='temp' >
        { data.main ? <p>{data.main.temp} F</p> : null  }
       

       </div>

       <div className='desc'>
       { data.weather ? <p>{data.weather[0].main }</p> : null  }
         

       </div>
       


    </div>
  )
}

export default Weather