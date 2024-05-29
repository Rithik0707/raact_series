

function customElements(react,maincontaoiner){

    // best approach using the for in loops to reduce code 
   const firstElem = document.createElement(react.type);
   firstElem.innerText= react.Children;
   for (const key in react.props) {
    firstElem.setAttribute(key,react.props[key])
    
   }
 
  
  maincontaoiner.appendChild(firstElem)

}

const react={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank",
        class:"main"
    },
    Children:"click me to go the website"

}















const maincontaoiner=  document.getElementById("root");


customElements(react,maincontaoiner)