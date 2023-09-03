

let search =  ()=>{
    let searchbox=document.getElementById('search-item');
    let storeitems = document.getElementById('product-list');
    let product = document.querySelectorAll('.product');
    let pName = document.getElementsByTagName('h2');

    for( var i=0; i<pName.length;i++){
        let   match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox)> -1){
                product[i].style.display='';
            }else{
                product[i].style.display= 'none';
            }
        }
    }
}