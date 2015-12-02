Q1.) 10.times { |i| puts " " * i + str }

Q2.) statement = "The Flintstones Rock"
     freq = {}
     statement.split('').each do |e|
      if freq[e]
        freq[e] += 1
      else
        freq[e] = 1
      end
     end

Q3.) puts "the value of 40 + 2 is " (40 + 2).to_s
     puts "the value of 40 + 2 is #{40 + 2}"

Q4.) the first code snippet will puts 1, puts 3, and then return [3, 4]
     the second code snippet will puts 1, puts 2, and then output [1, 2]

Q5.) 

def factors(number)
  dividend = number
  divisors = []
  while dividend > 0
    divisors << number / dividend if number % dividend == 0
    dividend -= 1
  end
  divisors
end

Bonus 1.) number % dividend == 0 returns true if dividend evenly divides number

Bonus 2.) the second to last line 'divisors' is the return value of the method

Q6.) 'rollingbuffer1' mutates the argument 'buffer' whereas 'rollingbuffer2' does not

Q7.)
limit = 15

def fib(first_num, second_num)
  while second_num < limit
    sum = first_num + second_num
    first_num = second_num
    second_num = sum
  end
  sum
end

result = fib(0, 1)
puts "result is #{result}"

In the above code, the variable 'limit' is out of scope.  'limit' should be a constant.
Otherwise, you could pass in 'limit' as an argument to 'fib'.

LIMIT = 15

def fib(first_num, second_num)
  while second_num < LIMIT
    sum = first_num + second_num
    first_num = second_num
    second_num = sum
  end
  sum
end

Q8.)

def titleize(str)
  str.split(' ').map {|fragment| fragment.capitalize}.join(' ')
end

Q9.)

munsters.keys.each do |name|
  age_of_munster = munsters[name]["age"]
  case age_of_munster
  when 0..17
    munsters[name]["age_group"] = "kid"
  when 18..64
    munsters[name]["age_group"] = "adult"
  when 65..1000000
    munsters[name]["age_group"] = "senior"
  end
end

puts munsters

=> {"Herman"=>{"age"=>32, "gender"=>"male", "age_group"=>"adult"},
 "Lily"=>{"age"=>30, "gender"=>"female", "age_group"=>"adult"},
 "Grandpa"=>{"age"=>402, "gender"=>"male", "age_group"=>"senior"},
 "Eddie"=>{"age"=>10, "gender"=>"male", "age_group"=>"kid"},
 "Marilyn"=>{"age"=>23, "gender"=>"female", "age_group"=>"adult"}}
