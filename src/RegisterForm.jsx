import { useState } from "react"


function RegisterForm(){

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [uname,SetUname] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const [uname1,SetUname1] = useState("")
    const [password1,setPassword1] = useState("")


    const getAuthToken = () => {
        return window.localStorage.getItem('auth_token');
    };
    
    const setAuthHeader = (token) => {
        if (token !== null) {
          window.localStorage.setItem("auth_token", token);
        } else {
          window.localStorage.removeItem("auth_token");
        }
    };

    const request = (method, url, data) => {

        let headers = {};
        if (getAuthToken() !== null && getAuthToken() !== "null") {
            headers = {'Authorization': `Bearer ${getAuthToken()}`};

            console.log(headers)
            return headers
        }
        else return null



        
    
        /*return axios({
            method: method,
            url: url,
            headers: headers,
            data: data});*/
    };








    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }


     async function testCsrfProtection(){

        const csrf = getCookie("XSRF-TOKEN")

        console.log(csrf)

        const dataToSend = {
            test3Data:"csrf workingggggg"
        }

        const res = await fetch(`http://localhost:8080/test2`,{
            credentials: "include",
            
            headers: {
                
                "X-XSRF-TOKEN":csrf,
                //"_csrf" : csrf,
                "Content-Type": "application/json",
            },
             
            body:JSON.stringify(dataToSend),
            method:'post',
        })

        const data = await res.json()
        console.log(data)



    }


    async  function submitForm(e){
        e.preventDefault()

        const dataToSubmit = {
            firstName:fname,
            lastName:lname,
            password:password,
            email:email,
            roles:{id:1},
            username:uname,
            
            
        }

       const loginData={
            username:"user",
            password:"password"
        }
        
        
        //console.log(JSON.stringify(dataToSubmit))

        const res = await fetch(`http://localhost:8080/login`,{
            credentials: "include",
            
            headers: {
                "Content-Type": "application/json",
            },
             
            body:JSON.stringify(loginData),
            method:'post',
        })

        console.log(res)

        const data =  res.text.toString()

        console.log(data)
    }

    async function fetchData(){

        const res = await fetch("http://localhost:8080/test3",{
            credentials: "include"
        })
        const data =  await res.json()


        console.log(res)
        console.log("--*****************-----------------------------")
        console.log(data)
        console.log("------------------------------------------------------------------------")
    }

    async function fetchDataJwtCookies(){

        const theData = {
            username:"test",
            password:"1234"
        }

        const res = await fetch("https://localhost:8080/auth/login",{
            
        headers: {
            "Content-Type": "application/json",
        },
        
        body:JSON.stringify(theData),
        method:'post',
    })


        const data =  await res.json()


        console.log(res)
        console.log("--*****************-----------------------------")
        console.log(data)
        console.log("------------------------------------------------------------------------")

    }


    async  function submitForm2(e){
        e.preventDefault()

        const dataToSubmit1 = {
            username:uname1,
            password:password1,
     
           
        }

        
        console.log(JSON.stringify(dataToSubmit1))

        const res = await fetch(`http://localhost:8080/auth/login`,{
            
            headers: {
                "Content-Type": "application/json",
            },
            
            body:JSON.stringify(dataToSubmit1),
            method:'post',
        })

        console.log("-------------------------------------------------------------------------------------------------------------------")
        console.log(res)

        const data = await res.json()

        console.log(data)

        console.log("-------------------------------------------------------------------------------------------------------------------")
    }


    async function trackUser(){
        const res = await fetch("http://localhost:8080/track",{
            credentials:"include"
        })

        const data = await res.json()

        console.log("JUST TRACKING")
        console.log(data)
    }

    async function getCount(){
        const res = await fetch("http://localhost:8080/count",{
            credentials:"include"
        })

        const data = await res.json()

        console.log("counting")
        console.log(data)
    }


    async function logout(){
        const res = await fetch("http://localhost:8080/logout1",{
            credentials:"include",
            method:'post'
        })

        const data = await res.json()

        console.log("counting")
        console.log(data)
    }




    return(
        <>  






            <button onClick={submitForm}>LOGIN BOY</button>

            <button onClick={fetchData}>GET SOME DATA BOY</button>

            <button onClick={fetchDataJwtCookies}>LOGIN JWT COOKIES</button>

            <button onClick={trackUser}>Track</button>

            <button onClick={getCount}>get count</button>

            <button onClick={logout}>log out</button>


            <button onClick={testCsrfProtection}>testCsrfProtection</button>






           {/* <form onSubmit={submitForm}>

                <label htmlFor="fname">first name</label>
                <input type="text" onChange={ (e) => setFname(e.target.value) }/>

                <label htmlFor="lname">last name</label>
                <input type="text"  onChange={ (e) => setLname(e.target.value)}/>

                <label htmlFor="uname">user name</label>
                <input type="text" onChange={ (e) => SetUname(e.target.value)}/>

                <label htmlFor="email">email</label>
                <input type="text" onChange={  (e) => setEmail(e.target.value)}/>

                <label htmlFor="password">password</label>
                <input type="text" onChange={ (e) => setPassword(e.target.value)} />

                <button>submit</button>


            </form>



            <form onSubmit={submitForm2}>

               <h1>LOGIN</h1>

                <label htmlFor="uname">user name</label>
                <input type="text" onChange={ (e) => SetUname1(e.target.value)}/>


                <label htmlFor="password">password</label>
                <input type="text" onChange={ (e) => setPassword1(e.target.value)} />

                <button>LOGIN</button>


            </form>
    */}
        </>

    )
}

export default RegisterForm