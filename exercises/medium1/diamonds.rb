def stars(n)
  '*' * n
end

def pad(str, n)
  n.times do
    str = ' ' + str + ' '
  end
  str
end

def diamond(n)
  print_top_half(n)
  print_bottom_half(n)
end

def print_top_half(n)
  i = 0
  while 2 * i + 1 <= n
    puts pad(stars(2 * i + 1), padding(n, i))
    i += 1
  end
end

def print_bottom_half(n)
  i = (n - 1) / 2 - 1
  while i >= 0
    puts pad(stars(2 * i + 1), padding(n, i))
    i -= 1
  end
end

def padding(n, i)
  (n - (2 * i + 1)) / 2
end
