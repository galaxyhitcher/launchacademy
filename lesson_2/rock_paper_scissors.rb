VALID_CHOICES = %w(rock paper scissors lizard spock)

def prompt(message)
  Kernel.puts("=> #{message}")
end

def win?(first, second)
  (first == 'rock' && second == 'scissors') ||
    (first == 'paper' && second == 'rock') ||
    (first == 'scissors' && second == 'paper') ||
    (first == 'lizard' && second == 'spock') ||
    (first == 'spock' && second == 'rock') ||
    (first == 'rock' && second == 'lizard') ||
    (first == 'paper' && second == 'spock') ||
    (first == 'spock' && second == 'scissors') ||
    (first == 'lizard' && second == 'paper') ||
    (first == 'scissors' && second == 'lizard')
end

def display_result(player, computer)
  if win?(player, computer)
    prompt("You won!")
  elsif win?(computer, player)
    prompt("Computer won!")
  else
    prompt("It's a tie")
  end
end

def analyze(choice)
  if choice == 'r'
    'rock'
  elsif choice == 'p'
    'paper'
  elsif choice == 'ss'
    'scissors'
  elsif choice == 'sp'
    'spock'
  elsif choice == 'l'
    'lizard'
  else
    choice
  end
end

user_points = 0
computer_points = 0

loop do
  choice = ''
  loop do
    prompt("Choose one: #{VALID_CHOICES.join(',  ')}.  You can type r, p, l, ss for scissors and sp for spock.")
    choice = analyze(gets.chomp)

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt("That's not a valid choice.")
    end
  end

  computer_choice = VALID_CHOICES.sample

  puts "You chose: #{choice}; Computer chose: #{computer_choice}"

  if win?(choice, computer_choice)
    user_points += 1
  elsif win?(computer_choice, choice)
    computer_points += 1
  end

  display_result(choice, computer_choice)

  if user_points == 1 && computer_points == 1
    prompt("You have #{user_points} point, and the computer has #{computer_points} point.")
  elsif user_points == 1
    prompt("You have #{user_points} point, and the computer has #{computer_points} points.")
  elsif computer_points == 1
    prompt("You have #{user_points} points, and the computer has #{computer_points} point.")
  else
    prompt("You have #{user_points} points, and the computer has #{computer_points} points.")
  end

  if (user_points >= 5)
    prompt("You won the WHOLE game!")
    break
  elsif (computer_points >= 5)
    prompt("The computer won the WHOLE game.")
  end

  prompt("Do you want to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you for playing.  Good bye!")
