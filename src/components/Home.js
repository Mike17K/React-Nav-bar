import React from 'react';
import "./Home.css"

function Rollbar(items,patch_size) {    
    /* add style to wrapper*/
    
    let wrapper_children = [];
    for (let i = 0; i < items.length/patch_size; i++) {
        
        let container_children = [];        
        for (let j = patch_size*i; j < Math.min((i+1)*patch_size,items.length); j++) {
            let item = React.createElement('div',{className: "item"},[items[j]]);
            container_children.push(item)
        }   
        let container = React.createElement('div',{className: "rollbar-chunk"},[...container_children]);
        
        wrapper_children.push(container);
    }
    
    let wrapper = React.createElement('div',{className: "rollbar snaps-inline"},[...wrapper_children]);
    
    return wrapper;
}


export default function Home() { 
    const items = [ 'h1','h2','h1','h1','h1','h1','h1','h1','h1'];
    const l = Rollbar(items,3);

    const t = React.createElement("div",{className: "rollbar-container"},[l]);

    return t;
}