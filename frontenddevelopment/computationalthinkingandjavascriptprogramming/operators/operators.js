var apples = 3;
var bananas = 1;

var areEqual = apples === bananas;

eitherOr = bananas || apples;

console.log(eitherOr);

//console.log(areEqual);

if(apples === bananas) {
  console.log('yep');
} else {
  if(apples == bananas) {
    console.log('same value, different types');
  } else {
    console.log('nope');
  };
};

var lastName = "Addams";

var familyMessage = "Munsters" == lastName ? "You're part of the family!" : "You're not family."

console.log(familyMessage);
