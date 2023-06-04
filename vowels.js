
const tara=document.getElementById("tara");
const sentence= document.getElementById("text");


const vowels=["a","e","i","I","o","u"]


 tara.addEventListener("click", ()=>{
 let yazi=sentence.value;
 let counter=0;
 for(a of yazi){
     if(vowels.includes(a)){
     counter++
     sentence.value=" "
     sentence.focus()
}}
document.getElementById("cumle").innerHTML = `Your sentence: ${yazi}`
document.getElementById("sonuc").innerHTML = `Number of vowels: ${counter}`

}
)

document.getElementById("text").addEventListener("keydown", (e)=>{
    if(e.code=="Enter"){
        tara.click()
    }
})


     




















