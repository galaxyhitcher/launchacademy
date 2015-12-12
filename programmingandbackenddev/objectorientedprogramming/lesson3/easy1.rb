# 1.)
	# 1. TrueClass
	# 2. String
	# 3. Array
	# 4. Fixnum

# 2.)

module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end

class Truck
  include Speed
  def go_very_slow
    puts "I am a heavy truck and like going very slow."
  end
end

chevy = Truck.new
chevy.go_fast

# => I am a Truck and going super fast!

volvo = Car.new
volvo.go_fast

# => I am a Car and going super fast!

# 3.) self refers to the caller of the method, (i.e. small_car).

# 4.)
class AngryCat
  def hiss
    puts "Hisssss!!!"
  end
end

AngryCat.new

# 5.)
class Fruit
  def initialize(name)
    name = name
  end
end

class Pizza
  def initialize(name)
    @name = name
  end
end

# Pizza has an instance variable because the initialize method includes a variable which starts with an @ sign.

# 6.) 

class Cube
  attr_accessor :volume
  def initialize(volume)
    @volume = volume
  end
end

# 7.) to_s will print out the object's class and an encoding of the object id to the console.

# 8.) self will refer to the calling object (an instance of the class Cat).

# 9.) self refers to the class itself (Cat) since this is a class method.

# 10.) You need to supply a color and a material to initialize a new Bag object (i.e. sack = Bag("brown","burlap")).