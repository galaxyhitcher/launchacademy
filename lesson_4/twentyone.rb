require 'pry'
SUITS = %w(hearts diamonds clubs spades)
VALUES = %w(2 3 4 5 6 7 8 9 10 Jack Queen King Ace)

def value(card)
  if card.split(' ')[0].to_i == 0 && card.split(' ')[0] == 'Ace'
    11
  elsif card.split(' ')[0].to_i == 0
    10
  else
    card.split(' ')[0].to_i
  end
end

def hand_values(hand)
  values = []
  hand.each { |card| values << card.split(' ')[0] }
  values
end

def score(hand)
  values = hand_values(hand)
  total = 0
  values.each { |card| total += value(card) }
  if total <= 21
    return total
  elsif values.include?('Ace')
    total -= 10 * values.count('Ace')
    ace_count = values.count('Ace')
    while ace_count > 0 && total > 21
      total -= 10
      ace_count -= 1
    end
    return total
  end
  total
end

def prompt(msg)
  puts '=> ' + msg
end

def lesser_score(hand)
  if score(hand).is_a?(Fixnum)
    score(hand)
  else
    score(hand)[0]
  end
end

def greater_score(hand)
  if score(hand).is_a?(Fixnum)
    score(hand)
  elsif score(hand) == 'blackjack'
    'blackjack'
  else
    score(hand)
  end
end

def initialize_deck
  deck = []

  SUITS.each do |suit|
    VALUES.each { |value| deck << value + ' ' + suit }
  end

  deck.shuffle!
end

def check_for_blackjack(dealer_hand, player_hand)
  if score(dealer_hand) == 21 && dealer_hand.size == 2
    prompt 'Dealer got Blackjack!  Dealer wins!'
    return true
  elsif score(player_hand) == 21 && player_hand.size == 2
    prompt 'You got blackjack!  You won!'
    return true
  end
  false
end

def joinor(arr, delimiter = ', ', conjunction = 'or')
  result = ''
  arr[0...-1].each { |num| result += num.to_s + delimiter }
  result += conjunction + ' ' + arr[-1].to_s
end

def show_hands(dealer_hand, player_hand, show_hole_card = false)
  if !show_hole_card
    prompt 'Computer has: ' + joinor([].push(dealer_hand[0].split(' ')[0]).push('unknown card'), ' ', 'and')
    prompt 'You have: ' + joinor(hand_values(player_hand), ' ', 'and')
    prompt '----------------'
  else
    prompt 'Computer has: ' + joinor(hand_values(dealer_hand), ' ', 'and')
    prompt 'You have: ' + joinor(hand_values(player_hand), ' ', 'and')
    prompt '----------------'
  end
end

def busted?(hand)
  lesser_score(hand) > 21
end

def deal_card(hand)
  hand << DECK.pop
end

def dealer_plays(dealer_hand, player_hand)
  while score(dealer_hand) <= 17 || score(dealer_hand) < score(player_hand)
    deal_card(dealer_hand)
  end
end

def hand_is_less_than_or_equal_to_21(hand)
  lesser_score(hand) <= 21
end

def biggest_score_less_than_or_equal_to_21(hand)
  if greater_score(hand) <= 21
    return greater_score(hand)
  else
    return lesser_score(hand)
  end
end

def bigger_hand?(first_hand, second_hand)
  biggest_score_less_than_or_equal_to_21(first_hand) > biggest_score_less_than_or_equal_to_21(second_hand)
end

def evaluate_winner(dealer_hand, player_hand)
  if bigger_hand?(player_hand, dealer_hand) &&
     hand_is_less_than_or_equal_to_21(player_hand) &&
     busted?(dealer_hand)
    prompt 'You won and the Dealer busted!'
  elsif bigger_hand?(player_hand, dealer_hand) &&
        hand_is_less_than_or_equal_to_21(player_hand)
    prompt 'You won!'
  elsif bigger_hand?(dealer_hand, player_hand) &&
        hand_is_less_than_or_equal_to_21(player_hand) &&
        busted?(dealer_hand)
    prompt 'Dealer busted, you won!'
  else
    prompt 'Dealer won.'
  end
end

DECK = initialize_deck

dealer_hand = []
player_hand = []

2.times { dealer_hand << DECK.pop }
2.times { player_hand << DECK.pop }

blackjack = check_for_blackjack(dealer_hand, player_hand)

show_hands(dealer_hand, player_hand)

answer = nil

if !blackjack
  loop do
    prompt 'hit or stay?'
    answer = gets.chomp
    break if answer == 'stay'
    deal_card(player_hand) # update hand
    show_hands(dealer_hand, player_hand)
    break if busted?(player_hand)
  end
end

if busted?(player_hand)
  # probably end the game? or ask the user to play again?
  show_hands(dealer_hand, player_hand, true)
  prompt 'You busted, Computer won.'
else
  prompt 'You chose to stay!'
  dealer_plays(dealer_hand, player_hand)
  show_hands(dealer_hand, player_hand, true)
  evaluate_winner(dealer_hand, player_hand)
end
