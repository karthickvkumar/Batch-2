// Number -> Any value from Positive, Negative, Fractional, Decimal
// var variable_name = value;
// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var age = 27;
console.log(age);

var account_number = 872122552563;
console.log(account_number);

//String - Any value which is enclosed inside single and double quotes

var user_name = "John Smith";
console.log(user_name);

//Boolean - Either true or false

var result = true;
console.log(result);

//Undefined - The variable has been created but the values has not been defined

var empty_data;
console.log(empty_data);

//Object - It is a collection of key value pairs.
// Syntax :
/*var variable_name = {
  key_1 : value,
  key_2 : value,
  key_3 : value 
}*/

var student_information = {
  first_name : "Karthick",
  last_name : "Kumar",
  age : 27,
  roll_number : 478541686,
  score : 450,
  grade : "A+"
}

console.log(student_information);
//Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value. 

//To Read a Value -> object_variable_name.key;
console.log(student_information.first_name);

//To Insert a new Value -> object_variable_name.new_key = new_value;
student_information.location = "Chennai";

//To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;
student_information.first_name = "Mr.Abc";

//To delete a existing Record -> delete object_variable_name.key
delete student_information.roll_number;

console.log(student_information)