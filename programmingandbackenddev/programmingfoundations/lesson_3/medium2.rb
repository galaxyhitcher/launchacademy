Q1.)

total_age = 0

munsters.keys.each do |name|
  if munsters[name]["gender"] == "male"
    total_age += munsters[name]["age"]
  end
end

puts total_age

=> 444

Q2.)

munsters.keys.each do |name|
  puts "#{name} is a #{munsters[name]["age"]} year old #{munsters[name]["gender"]}."
end

Q3.)

def more_straightforward_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param << "rutabaga"
end

my_string = "pumpkins"
my_array = ["pumpkins"]

my_string, my_array = more_straightforward_method(a_string_param, an_array_param)

puts "My string looks like this now: #{my_string}"

My string looks like this now: pumpkins
=> nil

puts "My array looks like this now: #{my_array}"

My array looks like this now: ["pumpkins"]
=> nil

Q4.) sentence.split(' ').map! {|word| word.reverse}.join(' ')

Q5.) 34

Q6.) The original hash is scrambled.

Q7.) "paper"

Q8.) "no"