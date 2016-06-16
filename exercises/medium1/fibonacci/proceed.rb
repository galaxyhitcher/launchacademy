def fibonacci(n)
  a = 1
  b = 1
  i = 2
  while i < n
    temp = b + a
    a = b
    b = temp
    i += 1
  end
  b
end
