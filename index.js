import login from './login.js';
import register from './register.js';

const root=document.getElementById('root');
// console.log(root);
const allanchor = document.querySelectorAll('a');

const router={
    "/login": login,
    "/register": register
}

function handleClick(e) {
    e.preventDefault(); 
    // console.log(e.target.pathname);

    let path=e.target.pathname;
    history.pushState(null,"",  `${path}`)
    // console.log(path);
    root.innerHTML=router[path]();
    // if (path === '/login') {
    //     root.innerHTML = login();
    // } else if (path === '/register') {
    //     root.innerHTML = register();
    // }
    

}
// console.log(allanchor);
allanchor.forEach((anchor) => {
    anchor.addEventListener('click', handleClick);
        
    
})

        
         
