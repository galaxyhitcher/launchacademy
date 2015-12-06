require 'pry'
CURRENT = 'choose'
INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'
WINNING_LINES = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 2, 3],
                 [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]]
def prompt(msg)
  puts '=> ' + msg
end

# rubocop:disable Metrics/MethodLength
def display_board(brd)
  system 'clear'
  puts "You're an #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}."
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "     |     |"
  puts ""
end
# rubocop:enable Metrics/MethodLength

def joinor(arr, delimiter = ', ', conjunction = 'or')
  result = ''
  arr[0...-1].each { |num| result += num.to_s + delimiter }
  result += conjunction + ' ' + arr[-1].to_s
end

def initialize_board
  new_board = {}
  (1..9).each { |index| new_board[index] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_piece!(brd)
  square = ''
  loop do
    prompt "Choose a square (#{empty_squares(brd).join(', ')}):"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice."
  end
  brd[square] = PLAYER_MARKER
end

def weak_square(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 2 ||
       brd.values_at(*line).count(COMPUTER_MARKER) == 2
      line.each { |index| return index if brd[index] == ' ' }
    end
  end
  false
end

def weak_square?(brd)
  !!weak_square(brd)
end

def computer_places_piece!(brd)
  if weak_square?(brd)
    square = weak_square(brd)
  elsif empty_squares(brd).include?(5)
    square = 5
  else
    square = empty_squares(brd).sample
  end
  brd[square] = COMPUTER_MARKER
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def place_piece!(brd, player)
  if player == 'Player'
    player_places_piece!(brd)
  else
    computer_places_piece!(brd)
  end
end

def alternate_player(player)
  if player == 'Player'
    'Computer'
  else
    'Player'
  end
end

player_points = 0
computer_points = 0

prompt 'Type yes if you want to go first.'

if gets.chomp.downcase.start_with?('y')
  current_player = 'Player'
else
  current_player = 'Computer'
end

loop do
  board = initialize_board
  loop do
    display_board(board)
    place_piece!(board, current_player)
    current_player = alternate_player(current_player)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won"
    player_points += 1 if detect_winner(board) == 'Player'
    computer_points += 1 if detect_winner(board) == 'Computer'
  else
    prompt "It's a tie."
  end
  prompt "Player: #{player_points}, Computer: #{computer_points}"
  prompt 'Play again? (y or n)' if player_points < 5 && computer_points < 5
  break if player_points >= 5 || computer_points >= 5
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

puts 'Player wins!' if player_points == 5
puts 'Computer wins' if computer_points == 5

prompt 'Thanks for playing tic tac toe!  Goodbye'
