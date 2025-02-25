const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","/[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = ''



let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');


function generatePassword(){
    password = ''
    for(let i = 0; i <= 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
         password += characters[randomIndex] 
    } 
        return password

}

function getPassword(){
    
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
   
}

passwordOne.addEventListener('dblclick', () => {
    navigator.clipboard.writeText(passwordOne.textContent)
    alert('Password copied to clipboard')
}
)

passwordTwo.addEventListener('dblclick', () => {
    navigator.clipboard.writeText(passwordTwo.textContent)
    alert('Password copied to clipboard')
}
)

