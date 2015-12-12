class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

# 1.) oracle.predict_the_future might return "You will eat a nice lunch".

class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

class RoadTrip < Oracle
  def choices
    ["visit Vegas", "fly to Fiji", "romp in Rome"]
  end
end

# 2.) trip = RoadTrip.new
#     trip.predict_the_future
#     => "You will visit Vegas"

# 3.) >> HotSauce.ancestors
#     [HotSauce, Taste, Object, Kernel, BasicObject]

# 4.)  
class BeesWax
  attr_accessor :type
  def initialize(type)
    @type = type
  end

  def describe_type
    puts "I am a #{@type} of Bees Wax"
  end
end

# 5.)
# excited_dog = "excited dog"   local variable
# @excited_dog = "excited dog"  instance variable
# @@excited_dog = "excited dog" class variable

# 6.) self.manufacturer s a class method which you would call like this: Television.manufacturer.

class Television
  def self.manufacturer
    # method logic
  end

  def model
    # method logic
  end
end

# 7.) self.cats counts all cats initialized.
class Cat
  @@cats_count = 0

  def initialize(type)
    @type = type
    @age  = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end

tabby = Cat.new('brown')
cheshire = Cat.new('mad')
tigger = Cat.new('bouncy')

Cat.cats_count

# => 3

# 8.) 
class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    #rules of play
  end
end

# 9.) A new play method in the Bingo class would override Game#play since it appears sooner in the method lookup chain.

# 10.) Abstraction, encapsulation, information hiding, a way to manage complexity.