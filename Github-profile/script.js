window.onload=function(){
    const uname=document.getElementById("search-text");
    uname.addEventListener('keyup', updateValue);
    fetchData("github");
}


var profileData={
    avatar:"",
    userid:"",
    fullName:"",
    location:"",
    bio:"",
    followers:"",
    following:"",
    totalRepos:"",
    blog:""
}

const defaultData=()=>{
    profileData={
        avatar:"https://cdn.pixabay.com/photo/2020/12/19/02/50/emoji-5843434_1280.png",
        userid:"Not Found!",
        fullName:"",
        location:"",
        bio:"",
        followers:"",
        following:"",
        totalRepos:"",
        blog:""
    }

    document.getElementById("avatar").src=profileData.avatar;
    document.getElementById("user-details").classList.add("hidden");
    document.getElementById("not-found").classList.remove("hidden");
    
    //updateProfile();
}

const getData=async(name)=>{
    let response = await fetch(`https://api.github.com/users/${name}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
   
    
}
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms (5 seconds)

function updateValue(e) {
    
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function(){

        fetchData(e.target.value);
    }, doneTypingInterval);

}

function fetchData(name){
    getData(name)
    .then(data=>{
        if(data.message && data.message==="Not Found")
        {

            defaultData();
        }
        else{
            profileData.avatar=data.avatar_url;
            profileData.userid=data.login;
            profileData.fullName=data.name;
            profileData.location=data.location;
            profileData.bio=data.bio;
            profileData.followers=data.followers;
            profileData.following=data.following;
            profileData.totalRepos=data.public_repos;
            profileData.blog=data.blog;
            updateProfile();
            
        }
    })
    .catch(err=>{

    })
}

function updateProfile(){

    document.getElementById("not-found").classList.add("hidden");
    document.getElementById("user-details").classList.remove("hidden");

    const avatar=document.getElementById("avatar");
    const userid=document.getElementById("userid");
    const fullName=document.getElementById("fullName");
    const currLocation=document.getElementById("location");
    const bio=document.getElementById("bio");
    const followers=document.getElementById("followers");
    const following=document.getElementById("following");
    const totalRepo=document.getElementById("totalRepo");
    const blog=document.getElementById("blog");
    

    avatar.src=profileData.avatar;
    userid.textContent=profileData.userid;
    fullName.textContent=profileData.fullName;
    currLocation.textContent=profileData.location?profileData.location:"Unknown";
    bio.textContent=profileData.bio?profileData.bio:"";
    followers.textContent=profileData.followers ?profileData.followers :0;
    following.textContent=profileData.followers?profileData.following:0;
    totalRepo.textContent=profileData.totalRepos?profileData.totalRepos:0;
    blog.textContent=profileData.blog;
}

function openBlog(){
    console.log(profileData.blog);
    window.open(profileData.blog.startsWith("http")?profileData.blog:("//"+profileData.blog),"_blank");
}




