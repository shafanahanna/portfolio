function sendMail(){
    var params ={
        name:document.getElementById("name").Value,
        email:document.getElementById("e-mail").value,
        message:document.getElementById("message").value
    };

  const serviceID ="service_wjobrvh";
   const templateID ="template_73blm3l";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("e-mail").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully")
})

.catch((err) => console.log(err))
;

}
