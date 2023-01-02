//const database = firebase.database()
var datab  = firebase.database().ref('data');
function signUp(){
    
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){

    })
    .catch(function (error){
        var errorcode = error.code;
        var errormsg = error.message;
    });
    }

    const auth = firebase.auth();

    function login(){
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        firebase.auth().signInWithEmailAndPassword(email, password)
        //
        .then(function(){
            var user = auth.currentUser
        })
    
        .catch((error)=>{
            document.getElementById("error").innerHTML = error.message
        })
    }
    

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        usename: getId('username'),
        adn: getId('adn'),
        lid: getId('lid'),
        email: getId('email'),
        password: getId('password')

    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('loginForm').reset();
})
function  getId(id){
    return document.getElementById(id).value;
}

//auth

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("dash.html")
    }
})


function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}





