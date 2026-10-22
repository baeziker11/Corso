// Add custom JavaScript here
function userScroll(){
    const navbar = document.querySrelector('.navbar')

    window.addEventListener('scroll',()=> {
        if(window.scrolly > 50){
            navbar.classlist.add('bg-dark')
        } else {
            navbar.classlist.remove('bg-dark')
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll)
