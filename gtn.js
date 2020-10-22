//  getRandomnumber();
let CorrectNumber = Math.floor(Math.random() * 100 ) +1 ;
console.log("Correct number is " + CorrectNumber)



// console.log(CorrectNumber)


window.onload = function()
{
    // document.getElementById("number-submit").addEventListener("click",playgame)
    
    document.getElementById("number-submit").addEventListener("click",playgame)
    document.getElementById("number-submit").addEventListener("click",Display_Guess)
    document.getElementById("restart-game").addEventListener("click", restart)
   
}

// function playgame() {
//     var Enterd = document.getElementById("number-guess").value; 
//     DisplayResult(Enterd);
   
//     // var result = parseFloat(OurNumber) - parseFloat(Enterd)
//     // // document.getElementById("Answer2").innerHTML="Result is  " +result;


//     // if (Enterd == CorrectNumber)
//     //   document.getElementById("Answer").innerHTML = "CORRECT !!";
//     // else if (Enterd>CorrectNumber)
//     //   document.getElementById("Answer").innerHTML = "TOO HIGH ";
//     // else
//     //   document.getElementById("Answer").innerHTML = "TOO LOW";

// }


// demo("won","Awesome ! Great job");

function playgame()
{        
        var Enterd = document.getElementById("number-guess").value; 
         console.log("Enterd number is " + Enterd + "and correct number is "+ CorrectNumber)
        DisplayResult(Enterd);   
}
 

function restart()
{
    window.location.reload()            //Reoad the page !!!!
    // document.getElementById("random").innerHTML = Math.floor((Math.random() * 100) + 1);    //Generate another random number !!!
}

function DisplayResult(Enterd)
{
    


    if(Enterd == CorrectNumber)
        {
        
        demo("won","Awesome job!, You got it ");
        }

        else if(Enterd < CorrectNumber) {demo("warning","Your guess is too low !!");}

        else {demo("warning","Your guess is too high !!");}



}



function demo(inputDemo,text)
{
    let dialog;
    switch(inputDemo)
    {
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>" + text;
            break;
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>" + text;
            break;
    }
    dialog = dialog + "</div>"
    console.log(dialog)
    document.getElementById("demo").innerHTML = dialog;
}


    function Display_Guess()
    {
        var Enterd = document.getElementById("number-guess").value; 
        console.log(Enterd)
        document.getElementById("youGuessed").innerHTML = "You guessed  " + Enterd;  
    }


    // var dis_Enterd = document.getElementById("number-guess").value; 
    // console.log("clacla" + dis_Enterd)
    // document.getElementById("youGuessed").innerHTML = "yo"

    // "<div class='alert alert-primary' role='alert'><center>You Guessed</center></div>" 

// demo("won","Awesome ! Great job");
// demo("warning","Too Low !!!");
// demo("warning","Too High !!!");

// var Global_demo_Enterd = document.getElementById("number-guess").value;
// console.log(Global_demo_Enterd)

// function demoDisplay(Enterd)
//     {
//         var Enterd = document.getElementById("number-guess").value;
//         console.log(Enterd)
//         document.getElementById("demo2").innerHTML = Enterd;
//     }

// demoDisplay();


// function getDialog(dialogType,text)
// {
//     let dialog;
//     switch(dialogType)
//     {
//         case "warning":
//             dialog = "<div class='alert alert-warning' role='alert'>"
//             break;

//         case "won":
//             dialog = "<div class='alert alert-success' role='alert'>"
//             break;
//     }
//     dialog = dialog + text + "</div>";
    
// }

// let dialogType = "won" ;
// let text = "Awesome ! Great job !!"


// function Display()
// {

// }


// getDialog(dialogType,text);
// console.log(dialogType)
// console.log(text)
// console.log(dialog)
// document.getElementById("demo").innerHTML = dialog;



// function getRandomnumber()
// {
//     let randomNumber = Math.floor(Math.random() * 100 ) +1 ;
//     console.log(randomNumber)
//     var CorrectNumber = randomNumber;
//     console.log(CorrectNumber)
// }




