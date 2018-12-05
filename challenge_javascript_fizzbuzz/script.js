function doFizzBuzz() {
  const num = parseInt(prompt("Please enter your number"));
  if (num % 3 == 0 && num % 5 == 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 class="container text-center m-2">FizzBuzz</h3>`;
  } else if (num % 5 == 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 class="container text-center m-2">Buzz</h3>`;
  } else if (num % 3 == 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 class="container text-center m-2">Fizz</h3>`;
  } else if (Number.isInteger(num) == false) {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 class="container text-center m-2">Please type a number instead of a string.</h3>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 class="container text-center m-2">The number ${num} is not a multiple of 3 and 5.</h3>`;
  }
}
