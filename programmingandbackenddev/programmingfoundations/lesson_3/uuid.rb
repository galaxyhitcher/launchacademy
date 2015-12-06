def rand_hex
  (('a'..'f').to_a + (0..9).to_a).sample.to_s
end

def uuid
  result = ''
  8.times { result += rand_hex }
  result += '-'
  4.times { result += rand_hex }
  result += '-'
  4.times { result += rand_hex }
  result += '-'
  4.times { result += rand_hex }
  result += '-'
  12.times { result += rand_hex }
  result
end