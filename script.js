let child=document.getElementsByClassName("children");
console.log(child);
Array.from(child).forEach(element => {
    element.onmouseenter = function(){
        console.log();
        document.querySelector("p.activ").setAttribute('class','');
        document.querySelector("i.activ").setAttribute('class','fa-solid fa-chevron-down');
        element.children[1].setAttribute('class','activ');
        element.children[0].children[0].setAttribute('class','fa-solid fa-chevron-down activ');
    }
});
