
function register(){
    const randomNumber = Math.floor(Math.random() * 9999 );
let name=prompt('bu joyga ism yozing');
let surename=prompt("bu yerga familiya yozing" );
console.log( randomNumber);
let passwordtest=prompt("bu joyga biz jonatgan password yozing" );
console.log("ism:" + name + " \n familiya:"+surename +"\n")
if(randomNumber==passwordtest){
    let password= prompt("password for you accaunt");
    
    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
    login(name, password);
}
else{
    console.log("Xatolik")
}
}
function login(name, password){
    let loginName=prompt("login ismni yozing");
    let loginPassword=prompt("passwordni kirgizing");
    if(loginName==name &&  loginPassword==password)
    {
        console.log("akauntga muvofaqiyatli kirdingiz")

    }else {
        console.log("login yoki parol notogri kiritilgan")
    }
}
function login(){
    name=localStorage.getItem("name")
    password=localStorage.getItem("password")
    let loginName=prompt("login ismni yozing");
    let loginPassword=prompt("passwordni kirgizing");
    if(loginName==name &&  loginPassword==password)
    {
        console.log("akauntga muvofaqiyatli kirdingiz")

    }else {
        console.log("login yoki parol notogri kiritilgan")
    }
}