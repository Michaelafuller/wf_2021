function editProfile(){
    var newname = window.prompt("Please enter your name.")
    if(newname != null){
        edit = document.querySelector("#profileName")
        edit.innerText = `${newname}`
    }
}

function acceptDeny(){
    
}