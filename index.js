
function sendMail() {
    var params = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      Phone: document.getElementById("Phone").value,
      Message: document.getElementById("Message").value,
    };
  
    const serviceID = "service_xs3uhfs";
    const templateID = "template_6lkyaog";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("Name").value = "";
          document.getElementById("Email").value = "";
          document.getElementById("Phone").value ="";
          document.getElementById("Message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }



  function buttontest(){
    console.log("Button works fine")

  }
  