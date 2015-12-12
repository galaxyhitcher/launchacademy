# 1.)
  class Greeting
    def greet(message)
      puts message
    end
  end

  class Hello < Greeting
    def hi
      greet("Hello")
    end
  end

  class Goodbye < Greeting
    def bye
      greet("Goodbye")
    end
  end

  # case 1: 
  hello = Hello.new
  hello.hi

  # => "Hello"

  # case 2:
  hello = Hello.new
  hello.bye
  # => NoMethodError: undefined method `bye' for #<Hello:0x007ff1d202e510>

  # case 3:
  hello = Hello.new
  hello.greet

  # => ArgumentError: wrong number of arguments (0 for 1)

  # case 4:
  hello = Hello.new
  hello.greet("Goodbye")

  # Goodbye
  # => nil

  # case 5:
  Hello.hi
  # NoMethodError: undefined method `hi' for Hello:Class

# 2.) change Hello#hi to a class method and Greeting#greet to a class method
class Greeting
  def self.greet(message)
    puts message
  end
end

class Hello < Greeting
  def self.hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# 3.)
class AngryCat
  def initialize(age, name)
    @age  = age
    @name = name 
  end

  def age
    puts @age
  end

  def name
    puts @name
  end

  def hiss
    puts "Hisssss!!!"
  end
end

tabby = AngryCat(22,"Cranky")
macavity = AngryCat(3, "Moody")

# 4.)
class Cat
  def initialize(type)
    @type = type
  end

  def to_s
    puts "I am a #{@type} cat"
  end
end

# 5.)

class Television
  def self.manufacturer
    # method logic
  end 

  def model
    # method logic
  end
end

tv = Television.new
tv.manufacturer # error, manufacturer is not an instance method
tv.model

Television.manufacturer
Television.model # error Television#model is not a class method

# 6.) change self.age to @age

class Cat
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age  = 0
  end

  def make_one_year_older
    @age += 1
  end
end

# 7.) The explicit return is unnecessary.

class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color 
  end

  def self.information
    return "I want to turn on the light with a brightness level of super high and a colour of green"
  end

end

