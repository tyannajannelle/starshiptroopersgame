function submitAnswer(){
  var total = 5;
  var score = 0;
  var q1 = document.forms.trivia.q1.value;
  var q2 = document.forms.trivia.q2.value;
  var q3 = document.forms.trivia.q3.value;
  var q4 = document.forms.trivia.q4.value;
  var q5 = document.forms.trivia.q5.value; 
 for(i = 1; i <= total; i++){
   if(eval('q' +i)=== null || eval('q' +i)===''){
      alert('You missed question '+i);
   return false;
   }
 }

 // Variables //
    var questions = [q1,q2,q3,q4,q5];
    var answers=["a","d","b","a","b"];
    for(i = 0; i <= total; i++){
      if(answers[i]===questions[i]){
        score++;
        
      }
    }
  
  if (score != total){
    alert("You got "+score+" out "+total )
  }
  if(score === total){
  alert("Congrats, your score is "+score+" out of "+ total);
  }
  var results = document.getElementById('results')
   results.innerHTML = "<h3>you</h3>"
}
