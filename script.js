function bottles() {
    let output = "";

    for (let i = 99; i >= 0; i--) {

        if (i > 1) {
            output +=
                i + " bottles of beer on the wall, " +
                i + " bottles of beer. You take one down and pass it around, " +
                (i - 1) + " bottles of beer on the wall.<br></br>";
        }

        else if (i === 1) {
            output +=
                "1 bottle of beer on the wall, 1 bottle of beer. You take one down and pass it around, no more bottles of beer on the wall.<br><br>";
        }

        else {
            output +=
                "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.<br>";
        }
    }

    document.getElementById("placeholder").innerHTML = output;
}

//David Kenny-Vaughan, Week 9 Lab. 22.11.2025

//set function
function calculate(event){
//stop autorefreshing when submit is pressed. 
	event.preventDefault();
	//declare variables
           let sum=0;
           let average=0;
           
           //set user input into unchangeable variable
		const inputs = [                 
		   parseInt(document.getElementById("subject1").value),
		   parseInt(document.getElementById("subject2").value),
		   parseInt(document.getElementById("subject3").value),
		   parseInt(document.getElementById("subject4").value),
		   parseInt(document.getElementById("subject5").value),
		   parseInt(document.getElementById("subject6").value),
		   parseInt(document.getElementById("subject7").value),
		   parseInt(document.getElementById("subject8").value),
          	 ];
          	 //set loop which determined values of sum and average
		   for(i=0;i<=7;i++){
		   sum+=(inputs[i]);
		   
		   average=sum/8;
		 
           //if, else if and else statements for overall grade
            if(average>=80){
	document.getElementById("placeholder").innerHTML="Your average score is " +average+ "%.</br>Congratulations, You have received an A.";
            
        }
        else if(average>=70 && average<80){
        document.getElementById("placeholder").innerHTML="Your average score is " +average+ "%.</br>Congratulations, You have received a B.";
        }
        else if(average>=60 && average<70){
        document.getElementById("placeholder").innerHTML="Your average score is " +average+ "%. </br>Congratulations, You have received a C.";
        }
        else if(average>=50 && average<60){
        document.getElementById("placeholder").innerHTML="Your average score is " +average+ "%.</br>Congratulations, You have received a D.";
        }
        else{
        document.getElementById("placeholder").innerHTML="Your average score is " +average+ "%.</br> Sorry, you have failed the course.";
  }
  }
  }