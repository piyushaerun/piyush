InfixToPostfix = function(expression){
	var k=0;
	var postfix = "";
	var stack = [];
	stack[k]='#';
	var precedence = function(operator){
		switch(operator){	
		case "^":
			return 3;
		case "*":
		case "/":
			return 2;
		case "+":
		case "-":
			return 1;
		default:
			return 0;
		}
	}
	
	for(var i=0; i<expression.length; i++){
		var c = expression.charAt(i);
		if(!isNaN(parseInt(c))){
			postfix += c;
		}
		else if(c=="(")
		{
			k++;
			stack[k]=c;
		}
		else if(c==')')
		{
			while(stack[k]!='(')
			{
				postfix+=stack[k];
				k--;
			}
			k--;
		}
		else if(c == "+" || c=="-" || c =="*" || c=="/" || c=="^"){
			while(c != "^" && stack[k]!='#' && stack[k]!="("&&(precedence(c) <= precedence(stack[k]))){
				postfix += stack[k];
			k--;
				//console.log(postfix);
			}
			k++;
			stack[k]=c;
			//console.log(stack);
			
		}
	}
	
	
	while(stack[k]!='#'){
		postfix += stack[k];
		k--;
		
	}
	
	getPostfix = function(){
		return postfix;
	}

	geteval=function()
	{
	var x=postfixEval(postfix);
	return x;;
	}
}
function postfixEval(postfix) {
	

  var stack1 = [];
  var ch; // current char

  for (var j = 0, length = postfix.length; j < length;  j++) {

    ch = postfix[j];

    // if it's a value, push it onto the stack
    if (/\d/.test(ch))
      stack1.push(ch);

    // else if it's an operator
    else if (ch in operators) {

      var b = +stack1.pop();
      var a = +stack1.pop();

      var value = operators[ch](a, b);
      stack1.push(value);

    }

    // else we just skip whitespaces

  }

  if (stack1.length > 1)
   console.log("error");

  return stack1[0];
  

}

// operators
var operators = {
  "+": function (a, b) { return a + b },
  "-": function (a, b) { return a - b },
  "*": function (a, b) { return a * b },
  "/": function (a, b) { return a / b }
}

console.log("INFIX to POSTFIX");

var in1=InfixToPostfix("1*(2+8)-6/3"); 
console.log("Postfix  is   "+getPostfix());
console.log(geteval());
