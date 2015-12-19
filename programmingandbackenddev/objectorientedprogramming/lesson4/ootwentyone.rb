class Player
  attr_accessor :hand, :still_playing

  def initialize
    # what would the "data" or "states" of a Player object entail?
    # maybe cards? a name?
    @hand = []
    @still_playing = true
  end

  def hit(deck)
    @hand << deck.deal
  end

  def stay
    @still_playing = false
  end

  def busted?
    total > 21
  end

  def blackjack?
    @total == 21 && @hand.size == 2
  end

  def total
    total = 0
    ace_count = 0
    @hand.each do |card|
      total += card.value if card.value != 'Ace'
      ace_count += 1 if card.value == 'Ace'
    end

    ace_count.times { total += 11 }

    while ace_count > 0 && total > 21
      total -= 10
      ace_count -= 10
    end
    total
  end
end

class Deck
  attr_accessor :stack
  def initialize
    # obviously, we need some data structure to keep track of cards
    # array, hash, something else?
    @stack = []
    suits = %w(hearts diamonds clubs spades)
    values = %w(2 3 4 5 6 7 8 9 10 Jack Queen King Ace)
    suits.each do |suit|
      values.each do |value|
        @stack << Card.new(suit, value)
      end
    end
    @stack.shuffle!
  end

  def deal
    # does the dealer or the deck deal?
    @stack.pop
  end
end

class Card
  attr_reader :suit, :rank, :value
  def initialize(suit,rank)
    @suit = suit
    @rank = rank
  end

  def value
    if @rank.to_i != 0
      @rank.to_i
    elsif @rank == 'Ace'
      'Ace'
    else
      10
    end
  end

  def to_s
    puts "#{@rank} of #{@suit}"
  end
end

class Game
  def initialize
    @player = Player.new
    @dealer = Player.new
    @bicycle = Deck.new
  end

  def start
    deal_cards
    show_cards
    player_turn if @player.still_playing
    dealer_turn unless @player.busted?
    show_result
  end

  def deal_cards
    2.times do
      @player.hit(@bicycle)
      @dealer.hit(@bicycle)
    end
    show_result if @player.total == 21 || @dealer.total == 21
  end

  def show_cards
    puts '-------------------------------'
    puts 'Player has:'
    @player.hand.each(&:to_s)
    puts 'Dealer has:'
    @dealer.hand.each(&:to_s)
    puts '-------------------------------'
  end

  def player_turn
    while !@player.busted? && @player.still_playing && !@player.blackjack? && !@dealer.blackjack?
      puts 'Hit or stay?'
      choice = gets.chomp
      if choice.downcase == 'hit'
        @player.hit(@bicycle)
        show_cards
      elsif choice.downcase == 'stay'
        @player.still_playing = false
      end
    end
    show_result if @player.busted?
  end

  def dealer_turn
    while @dealer.total < 17 || @dealer.total < @player.total
      @dealer.hit(@bicycle)
    end
  end

  def show_result
    @player.still_playing = false
    @dealer.still_playing = false
    show_cards
    puts "Player has: #{@player.total}"
    puts "Dealer has: #{@dealer.total}"
    if @dealer.blackjack? && @player.blackjack?
      puts 'Both you and the dealer have blackjack, but the dealer wins.'
    elsif @dealer.blackjack?
      puts 'Dealer has blackjack, dealer wins.'
    elsif @player.blackjack?
      puts 'Player has blackjack, player wins!'
    elsif @dealer.busted?
      puts 'Player wins, dealer busted!'
    elsif @player.total > @dealer.total && !@player.busted?
      puts 'Player wins!'
    else
      puts 'Dealer wins...'
    end
  end
end

Game.new.start
