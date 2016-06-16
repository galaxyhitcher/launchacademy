def word_to_digit(str)
  sentence_array = clean(str.split(' ')).map { |word| translate(word) }
  sentence_join(sentence_array)
end

def translate(word)
  numbers = { 'zero' => 0, 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4,
              'five' => 5, 'six' => 6, 'seven' => 7, 'eight' => 8, 'nine' => 9 }
  numbers.keys.include?(word) ? numbers[word] : word
end

def clean(arr)
  arr.map { |word| process_into_array_if_last_char_is_period(word) }
     .flatten
end

def sentence_join(arr)
  arr.join(' ')
     .gsub(' .', '.')
end

def process_into_array_if_last_char_is_period(word)
  word[-1] == '.' ? [word[0..-2], word[-1]] : word
end

puts word_to_digit('Please call me at five five five one two three four. Thanks.')
