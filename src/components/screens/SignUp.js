import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const host="https://foodwebapp-backened.onrender.com";


const SignIn=()=> {

const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const [address,setAddress] = useState("")
      const [sector,setSector] = useState("")
      const [phoneno,setPhoneno] = useState("")
      const [city,setCity] = useState("")

let navigate =useNavigate();

const PostData =()=>{
  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
   M.toast({html: "Invalid Email", classes:"#d32f2f red darken-2"})
   return
  }  
  fetch(`${host}/signup`,{
    method:"post",
    headers:{
      "Content-Type":"application/json",
      'Access-Control-Allow-Origin': '*'
    },
    body:JSON.stringify({
      name,
      password,
      email,
      address,
      sector,
      city,
      phoneno,
          
    })
  }).then(res=>res.json())
  .then(data=>{
   if(data.error){
    M.toast({html: data.error, classes:"#d32f2f red darken-2"})
    }else{
    M.toast({html: data.message, classes:"#43a047 green darken-1"})
    navigate("/signin");
  }
  }).catch(err=>{
    console.log(err) 
  })

}



  return (
    <div className="mycard">
     <div className="card auth-card input-field ">
        <h2>Goodness</h2>
        <input type="text" placeholder="name"
        value={name}
        onChange={(e)=>setName(e.target.value)} />

        <input type="text" placeholder="email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" placeholder="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)} />

        <input type="text" placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)} />

        <input type="text" placeholder="sector" 
         value={sector}
         onChange={(e)=>setSector(e.target.value)}/>

        <input type="text" placeholder="city"
         value={city}
         onChange={(e)=>setCity(e.target.value)}/>
        <input type="number" placeholder="Phone Number"
         value={phoneno}
         onChange={(e)=>setPhoneno(e.target.value)}
         />
        
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={()=>PostData()}
        >SignUp
        </button>
        <h5><Link to="/signin">Already have an Account ?</Link></h5>
      </div>
    </div>
  )
}

export default SignIn