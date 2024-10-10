export const checkValidateData =(email, password, phno)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); 
     let isPhonenumberValid = true;
     if (phno && phno.length > 0) {
       isPhonenumberValid = /^\+?[1-9]\d{1,14}$/.test(phno);
     }

    if(!isEmailValid) return "Email Id is not valid"
    if(!isPasswordValid) return "Password is not valid"
    if(!isPhonenumberValid) return "Phone number is not Valid" 
    
    return null; 
}