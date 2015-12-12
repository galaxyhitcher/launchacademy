# 1.) Ben is right because attr_reader :balance provides a balance getter method which is accessed in BankAccount#balance.

class BankAccount
  attr_reader :balance

  def initialize(starting_balance)
    @balance = starting_balance
  end

  def positive_balance?
    balance >= 0
  end
end

# 2.) InvoiceEntry does not have a setter method for quantity.  Change the code like so:

class InvoiceEntry
  attr_accessor :quantity
  attr_reader :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    quantity = updated_count if updated_count >= 0
  end
end

# 3.) If you use attr_accessor, you change the public interface of the class.

# 4.)
class Greeting
  def greet(str)
    puts str
  end
end

class Hello < Greeting
  def hi
    greet "Hello"
  end
end

class Goodbye < Greeting
  def bye
    greet "Goodbye"
  end
end

# 5.)
class KrispyKreme
  def initialize(filling_type, glazing)
    @filling_type = filling_type
    @filling_type ||= "Plain"
    @glazing = glazing
  end

  def to_s
    if @glazing
      @filling_type + " with " + @glazing
    else
      @filling_type
    end
  end
end


donut1 = KrispyKreme.new(nil, nil)
donut2 = KrispyKreme.new("Vanilla", nil)
donut3 = KrispyKreme.new(nil, "sugar")
donut4 = KrispyKreme.new(nil, "chocolate sprinkles")
donut5 = KrispyKreme.new("Custard", "icing")

puts donut1
 # => "Plain"

puts donut2
 # => "Vanilla"

puts donut3
 # => "Plain with sugar"

puts donut4
 # => "Plain with chocolate sprinkles"

puts donut5
 # => "Custard with icing"

 # 6.) No difference, the self is extraneous.  self is not needed since we have attr_accessor.

# 7.) Change self.light_information to just self.information.

class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color
  end

  def self.light_information
    "I want to turn on the light with a brightness level of super high and a colour of green"
  end

end