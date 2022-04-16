name_of_the_student_array = [];
function submit()
{
var name_1 = document.getElementById("nameofstudent1").value;
var name_2 = document.getElementById("nameofstudent2").value;
var name_3 = document.getElementById("nameofstudent3").value;
var name_4 = document.getElementById("nameofstudent4").value;
name_of_the_student_array.push(name_1);
name_of_the_student_array.push(name_2);
name_of_the_student_array.push(name_3);
name_of_the_student_array.push(name_4);
console.log(name_of_the_student_array);
document.getElementById("displayname").innerHTML=name_of_the_student_array;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("displayname").innerHTML=name_of_the_student_array;
}