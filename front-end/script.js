const form = document.getElementById("myForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log("will submit FormData object to server");
   
    let resp = await fetch("http://localhost:3000/form", {
        method: "POST",        
        body: formData,
    });
    let respJson = await resp.json();
    console.log(respJson);
});
