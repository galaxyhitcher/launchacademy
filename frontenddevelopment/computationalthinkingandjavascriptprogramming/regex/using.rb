def url?(str)
  /^https?:\/\/\S+$/.match(str)
end

# puts url?('http://launchschool.com')   # -> true
# puts url?('https://example.com')       # -> true
# puts url?('https://example.com hello') # -> false
# puts url?('   https://example.com')    # -> false

def fields(str)
  return str.split(/[ \t,+]+/).to_s
end

# puts fields("Pete,201,Student")
# -> ['Pete', '201', 'Student']
#
# puts fields("Pete \t 201    ,  TA")
# -> ['Pete', '201', 'TA']
#
# puts fields("Pete \t 201")
# # -> ['Pete', '201'']
#
def mystery_math(str)
  str.sub(/[\+\-\*\/]/, '?')
end

# puts mystery_math('4 + 3 - 5 = 2')

# puts mystery_math('(4 * 3 + 2) / 7 - 1 = 1')
#
def mysterious_math(equation)
  equation.gsub(/[\+\-\*\/]/, '?')
end

# mysterious_math('4 + 3 - 5 = 2')           # -> '4 ? 3 ? 5 = 2'
# mysterious_math('(4 * 3 + 2) / 7 - 1 = 1') # -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
#
def danish(str)
  str.sub(/\b(apple|cherry|blueberry)\b/, 'danish')
end

# puts danish('An apple a day keeps the doctor away')
# puts danish('My favorite is blueberry pie')
# puts danish('The cherry of my eye')
# puts danish('apple. cherry. blueberry.')
# puts danish('I love pineapple')
# -> 'I love pineapple'

def format_date(str)
  str.sub(/\A(\d\d\d\d)-(\d\d)-(\d\d)\z/, '\3.\2.\1')
               .sub(/\A(\d\d\d\d)\/(\d\d)\/(\d\d)\z/, '\3.\2.\1')
end

puts format_date('2016-06-17')
puts format_date('2017/05/03')
puts format_date('2015/01-31')
