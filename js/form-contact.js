((d)=>{
    const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit",(e)=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/javier.ovalles.ing@gmail.com",{
            method:"POST",
            body: new FormData(e.target),
            
        }).then(res=>res.ok? res.json():Promise.reject(res))
        .then((json)=> {
            console.log(json);
            
            location.hash = "#gracias";
            $form.reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch(()=>{

            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrio un error vuelva a intentarlo.',
                
              })


            console.log(err);
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;

            
        })
        .finally(()=>{
            $loader.classList.add("none");
            setTimeout(()=>{
                location.hash = "#close";
            },3000);
        });
    });
})(document)

  