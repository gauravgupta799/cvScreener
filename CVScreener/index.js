console.log("Javascript");

const data = [
    {
        id:1,
        name:"Kaushik Das",
        age:26,
        city:'Benglore',
        language:"JavaScript",
        framework:"ReactJs",
        image:"https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
        id:2,
        name:"Gautam Sharma",
        age:22,
        city:'Karnataka',
        language:"JavaScript",
        framework:"AngularJs",
        image:"https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
        id:3,
        name:"Divya Gupta",
        age:23,
        city:'Noida',
        language:"Python",
        framework:"DJango",
        image:"https://randomuser.me/api/portraits/med/women/75.jpg"
    },
    {
        id:4,
        name:"Kashish Singh",
        age:27,
        city:'Delhi',
        language:"Java",
        framework:"Flask",
        image:"https://randomuser.me/api/portraits/med/women/55.jpg"
    },
    {
        id:5,
        name:"Samanth Shah",
        age:27,
        city:'Hydrabad',
        language:"Swift",
        framework:"Flask",
        image:"https://randomuser.me/api/portraits/med/men/35.jpg"
    },
    {
        id:6,
        name:"Kunal Nishad",
        age:28,
        city:'Jharkhand',
        language:"Ruby",
        framework:"Rubyframe",
        image:"https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
        id:7,
        name:"Rohini SHarma",
        age:36,
        city:'Lucknow',
        language:"Python",
        framework:"Flask",
        image:"https://randomuser.me/api/portraits/med/women/45.jpg"
    },
    {
        id:8,
        name:"Divya yadav",
        age:28,
        city:'Chennai',
        language:"JavaScript",
        framework:"Angular",
        image:"https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
        id:9,
        name:"Riddhi Patel",
        age:29,
        city:'Ahemdabad',
        language:"JavaScript",
        framework:"AngularJS",
        image:"https://randomuser.me/api/portraits/med/women/55.jpg"
    },
    {
        id:10,
        name:"Gaurav Gupta",
        age:22,
        city:'Noida',
        language:"JavaScript",
        framework:"ReactJs",
        image:"https://randomuser.me/api/portraits/med/men/85.jpg"
    },
]

// console.log("UsersData", users);

let AlertTx = document.getElementById("alertText");
let Time = document.getElementById("time")


function updateTime (){
    const date = new Date();
    const hour = formateTime(date.getHours());
    const minutes = formateTime(date.getMinutes());
    const seconds = formateTime(date.getSeconds());
    Time.innerHTML = `${hour} : ${minutes} : ${seconds}`;
}

function formateTime (time) {
    if(time < 10){
        return '0' + time;
    }else{
        return time;
    }
}

setInterval(updateTime, 1000);   

function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ? 
            {value:profiles[nextIndex++],done :false } : {done:true}
        }
    }
}

const candidates = cvIterator(data);
nextCV();

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image =  document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src = "${currentCandidate.image}"/><span id="userId" class="badge badge-danger">${currentCandidate.id}</span>`;
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old.</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                            </ul>`;

    }else{
        alert("No more profiles available.")
        window.location.reload();
    }
}


