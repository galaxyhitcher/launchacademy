def select(arr, &block)
  result = []
  arr.each { |element| result << element if yield(element) }
  result
end

def reduce(arr, acc = 0, &block)
  arr.each { |element| acc = yield(acc, element) }
end