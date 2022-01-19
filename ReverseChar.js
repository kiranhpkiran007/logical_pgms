//50.Reverse the character of the given string

var string = "Welcome to this Javascript Guide!";


var reverseEntireSentence = reverseBySeparator(string, "");

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
