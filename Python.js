function work(){
    alert("Work in Progress.");
}


var h1 = "Python was a hobby project";
var h2 = "Why it was called Python";
var h3 = "No braces";
var h4 = "Python influenced JavaScript";
var h5 = "for- and while- loops can have else statements";
var h6 = "People prefer Python over French";
var h7 = "Poem Written about Python Programming";
var h8 = "There are C and Java Variants in Python";

var a1 = "In December 1989, Python’s creator Guido Van Rossum was looking for a hobby project to keep him occupied in the week around Christmas. He had been thinking of writing a new scripting language that’d be a descendant of ABC and also appeal to Unix/C hackers. He chose to call it Python.";
var a2 = "The language’s name isn’t about snakes, but about the popular British comedy troupe Monty Python (from the 1970s). Guido himself is a big fan of Monty Python’s Flying Circus. Being in a rather irreverent mood, he named the project ‘Python’. Isn’t it an interesting Python fact?";
var a3 = "Unlike Java and C++, Python does not use braces to delimit code. Indentation is mandatory with Python. If you choose to import it from the __future__ package, it gives you a witty error.";
var a4 = "Python is one of the 9 languages that influenced the design of JavaScript. Others include AWK, C, HyperTalk, Java, Lua, Perl, Scheme, and Self.";
var a5 = "The else statement is not limited to if and try statements. If you add an else block after a for- or while- loop, the statements inside the else block are executed only after the loop completes normally. If the loop raises an exception or reaches a break statement, the code under else does not execute. This can be good for search operations.";
var a6 = "According to a recent survey, in the UK in 2015, Python overtook French to be the most popular language taught in primary schools. Out of 10, 6 parents preferred their children to learn Python over French. One of my favorite facts about Python programming.";
var a7 = "Believe it or not, a man named Tim Peters composed a poem called ‘The Zen of Python’ about Python programming. Simply type ‘import this’ into an interpreter to read this poetry.It’s a fascinating and entertaining poetry that you should read for yourself.";
var a8 = "Python offers variations for the C and Java programming languages, despite being a self-contained programming language. The C derivative, known as CPython, was built to give Python the benefits of C. One of these criteria is performance. The variation can be used as an interpreter as well as a compiler.";

var head = [h1,h2,h3,h4,h5,h6,h7,h8];
var ans = [a1,a2,a3,a4,a5,a6,a7,a8];

var x = Math.random();
x = Math.floor(x*8);
document.querySelector(".fact h3").innerHTML = head[x];
document.querySelector(".fact p").innerHTML = ans[x];

// console.log(x);