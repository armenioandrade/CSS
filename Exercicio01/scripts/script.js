function randombg(){
    var random= Math.floor(Math.random() * 7);
    var bigSize = 
                ["url('./images/1.jpg')",
                "url('./images/2.jpg')",
                "url('./images/3.jpg')",
                "url('./images/4.jpg')",
                "url('./images/5.jpg')",
                "url('./images/6.jpg')",
                "url('./images/7.jpg')"];
                
               /*["url('./images/"+ random +".jpg')"];*/
    document.getElementById("divImagem").style.backgroundImage=bigSize[random];
    console.log[bigSize[random]]
    console.log[random]
  }

function myFunction(){
    
    document.getElementById('divCadastro').style.display = 'inline'
    
}
