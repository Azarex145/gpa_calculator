const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamBurger.addEventListener('click',()=>{
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


const wel=document.getElementById("welMsg");
const dispBox=document.getElementById("semSubGrade");

let ECS1=0;
let ECS2=0;
let ECS3=0;
let ECS4=0;

const sem1Subjects = ['QP', 'Calculas', 'IIT', 'PPS', 'QP (P)', 'PPS (P)', 'Workshop'];
const sem1SubCredit = [4, 5, 2, 3, 1.5, 2, 2];

const sem2Subjects = ['AC', 'DET', 'PC', 'OOPS', 'BITC', 'AC (P)', 'PC (P)', 'OOPS (P)', 'BITC (P)', 'Web Tech (P)'];
const sem2SubCredit = [4, 5, 2, 3, 2, 1.5, 1, 2, 1, 1];

const sem3Subjects = ['LAPT', 'Data Structures', 'DE', 'CAO', 'DBMS', 'DS (P)', 'DE (P)', 'DBMS (P)'];
const sem3SubCredit = [4, 4, 4, 4, 4, 1.5, 1.5, 1.5];

const sem4Subjects = ['ECO', 'DS', 'MP', 'CN', 'OS', 'MP (P)', 'CN (P)', 'OS (P)'];
const sem4SubCredit = [3, 4, 4, 4, 4, 1.5, 1.5, 1.5];

const semester1 = document.getElementById("semester1");
const semester2 = document.getElementById("semester2");
const semester3 = document.getElementById("semester3");
const semester4 = document.getElementById("semester4");

const rows = document.createElement("tr");
rows.classList.add("rows");

function semester(nos, semSubjects,sem){
    sem.innerHTML="";
    const thead=`
        <tr>
            <th>Subjects</th>
            <th>Grades</th>
        </tr>
        `
    sem.innerHTML=`${thead}`
    for (let i = 0; i < nos ; i++) {
        rows.innerHTML=`
        <td>${semSubjects[i]}</td>
        <input type="text" id="${semSubjects[i]}" placeholder="Enter Grade">
        `;
        sem.appendChild(rows.cloneNode(true));
    }
}

function calGrade(n){
    if(n==='A+')
    return 10;
    else if(n==='A')
    return 9;
    else if(n==='B+')
    return 8;
    else if(n==='B')
    return 7;
    else if(n==='C+')
    return 6;
    else if(n==='C')
    return 5;
    else if(n==='D')
    return 4;
    else
    return 0;
}

function calculation(inpData,semCredit){
    let sum=0;
    for(let i=0; i<inpData.length;i++){
        sum+=semCredit[i]*calGrade(inpData[i].value);
    }
    return sum;
}

function iniRem(){
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
    sgpaDisp.innerHTML=" 0.00";
    cgpaDisp.innerHTML=" 0.00";
}

const calBtn = document.getElementById("calculate");

const sgpaDisp=document.getElementById("sgpaDisp");
const cgpaDisp=document.getElementById("cgpaDisp");

const sem1Btn = document.getElementById("sem1Btn");
sem1Btn.addEventListener('click',()=>{
    wel.style.display="none";
    dispBox.style.display="flex";
    sem1Btn.classList.add("active");
    sem2Btn.classList.remove("active");
    sem3Btn.classList.remove("active");
    sem4Btn.classList.remove("active");
    iniRem();
    semester1.style.display="block";
    semester2.style.display="none";
    semester3.style.display="none";
    semester4.style.display="none";
    semester(7,sem1Subjects,semester1);
    const inpData=Object.values(semester1.querySelectorAll("input"));
    console.log(inpData);
    calBtn.addEventListener('click',()=>{
        ECS1=calculation(inpData, sem1SubCredit);
        let sgpa=ECS1/19.5;
        sgpaDisp.innerHTML=` ${sgpa.toFixed(2)}`;
        cgpaDisp.innerHTML=` ${sgpa.toFixed(2)}`;
    })
})


const sem2Btn = document.getElementById("sem2Btn");
sem2Btn.addEventListener('click',()=>{
    wel.style.display="none";
    dispBox.style.display="flex";
    sem2Btn.classList.add("active");
    sem1Btn.classList.remove("active");
    sem3Btn.classList.remove("active");
    sem4Btn.classList.remove("active");
    iniRem();
    semester2.style.display="block";
    semester1.style.display="none";
    semester3.style.display="none";
    semester4.style.display="none";
    semester(10,sem2Subjects,semester2);
    const inpData=Object.values(semester2.querySelectorAll("input"));
    console.log(inpData);
    calBtn.addEventListener('click',()=>{
        ECS2=calculation(inpData, sem2SubCredit);
        let sgpa=ECS2/22.5;
        let cgpa=(ECS1+ECS2)/42;
        sgpaDisp.innerHTML=` ${sgpa.toFixed(2)}`;
        cgpaDisp.innerHTML=` ${cgpa.toFixed(2)}`;
    })
})

const sem3Btn = document.getElementById("sem3Btn");
sem3Btn.addEventListener('click',()=>{
    wel.style.display="none";
    dispBox.style.display="flex";
    sem3Btn.classList.add("active");
    sem1Btn.classList.remove("active");
    sem2Btn.classList.remove("active");
    sem4Btn.classList.remove("active");
    iniRem();
    semester3.style.display="block";
    semester1.style.display="none";
    semester2.style.display="none";
    semester4.style.display="none";
    semester(8,sem3Subjects,semester3);
    const inpData=Object.values(semester3.querySelectorAll("input"));
    console.log(inpData);
    calBtn.addEventListener('click',()=>{
        ECS3=calculation(inpData, sem3SubCredit);
        let sgpa=ECS3/24.5;
        let cgpa=(ECS1+ECS2+ECS3)/66.5;
        sgpaDisp.innerHTML=` ${sgpa.toFixed(2)}`;
        cgpaDisp.innerHTML=` ${cgpa.toFixed(2)}`;
    })
})

const sem4Btn = document.getElementById("sem4Btn");
sem4Btn.addEventListener('click',()=>{
    wel.style.display="none";
    dispBox.style.display="flex";
    sem4Btn.classList.add("active");
    sem1Btn.classList.remove("active");
    sem2Btn.classList.remove("active");
    sem3Btn.classList.remove("active");
    iniRem();
    semester4.style.display="block";
    semester1.style.display="none";
    semester2.style.display="none";
    semester3.style.display="none";
    semester(8,sem4Subjects,semester4);
    const inpData=Object.values(semester4.querySelectorAll("input"));
    console.log(inpData);
    calBtn.addEventListener('click',()=>{
        ECS4=calculation(inpData, sem4SubCredit);
        let sgpa=ECS4/23.5;
        let cgpa=(ECS1+ECS2+ECS3+ECS4)/90;
        sgpaDisp.innerHTML=` ${sgpa.toFixed(2)}`;
        cgpaDisp.innerHTML=` ${cgpa.toFixed(2)}`;
    })
})

