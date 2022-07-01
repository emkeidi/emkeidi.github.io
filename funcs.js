function get_limit(prompt) {
  let valid_input = false
  let input, max_number

  while (!valid_input) {
    input = window.prompt(prompt)

    max_number = Number(input)

    if (max_number != NaN && max_number > 0) {
      valid_input = true
    }
  }

  return Math.round(max_number)
}

// Getting the user prompt and selecting a random number

let n = get_limit('Enter a positive number to play the game!')

let num = Math.floor(Math.random() * n) + 1

let guesses = []

function do_guess() {
  // chain the document and number together to fetch the user input

  let guess = Number(document.getElementById('guess').value)

  let message = document.getElementById('message')

  if (isNaN(guess)) {
    message.innerHTML = 'That is not a number!'
  } else if (guess == num) {
    if (guesses.indexOf(guess) === -1) {
      guesses.push(guess)
    }
    message.innerHTML = `You got it! It took you ${guesses.length} tries
    and your guesses were ${guesses.join(', ')}.`
  } else if (guess > n || guess < 1) {
    message.innerHTML = 'That number is not in range, try again.'
  } else if (guess > num) {
    if (guesses.indexOf(guess) === -1) {
      guesses.push(guess)
    }
    message.innerHTML = 'No, try a bit lower.'
  } else if (guesses.includes(guess)) {
    message.innerHTML = 'That number has already been guessed.'
  } else {
    if (guesses.indexOf(guess) === -1) {
      guesses.push(guess)
    }
    message.innerHTML = 'Nope, try higher.'
  }

  console.log(guesses)
}
