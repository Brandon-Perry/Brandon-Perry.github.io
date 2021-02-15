document.addEventListener('DOMContentLoaded', ()=> {
    let submitEmail = document.getElementById('sendEmail')
    console.log('hit event listener')

    submitEmail.addEventListener('onClick', (e)=> {
        e.preventDefault()
        console.log('hit function')
        let email = getElementById('email')
        let name = getElementById('name')
        let message = getElementById('message')
        

        window.open(`mailto:brandonperryofficial@gmail.com?subject=Porfolio Site Email From ${name}?body=${message}`);
    })
})