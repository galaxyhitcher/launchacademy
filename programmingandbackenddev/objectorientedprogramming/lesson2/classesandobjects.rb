# 1.)
class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end


# 2.)
class Person
  attr_accessor :first_name, :last_name
  def initialize(name)
    @first_name = name.split(' ')[0]
    @last_name = name.split(' ')[1] 
  end

  def name
    @first_name + ' ' + @last_name
  end
end

# 3.)
class Person
  attr_accessor :name, :first_name, :last_name
  def initialize(name)
    @first_name = name.split(' ')[0]
    @last_name = name.split(' ')[1]
  end

  def name=(name)
    @first_name = name.split(' ')[0]
    @last_name = name.split(' ')[1]
    @name = name
  end
end

bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')

# 4.)
bob.name == rob.name

# 5.) This prints out the following:
#     The person's name is #<Person:0x007fe521a46b00>
class Person
  attr_accessor :name, :first_name, :last_name
  def initialize(name)
    @first_name = name.split(' ')[0]
    @last_name = name.split(' ')[1]
    @name = name
  end

  def to_s
    name
  end

  def name=(name)
    @first_name = name.split(' ')[0]
    @last_name = name.split(' ')[1]
    @name = name
  end
end

# this outputs:
# The person's name is: Robert Smith
