# 1.)
class Dog
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end
end

class Bulldog < Dog
  def swim
    "can't swim!"
  end
end

# 2.)
module Animal
  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

class Dog
  include Animal
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end

  def fetch
    'fetching!'
  end
end

class Cat
  include Animal
  def speak
    'meow!'
  end
end

# The method lookup path is the order in which Ruby will traverse the class hierarchy to look for methods to invoke.