# this class represents an object that can rotate other objects
class Rotater
  def rotate_array(arr)
    return arr if arr.empty?
    arr[1..-1].push(arr[0])
  end

  def rotate_string(str)
    rotate_array(str.split('')).join('')
  end

  def rotate_integer(int)
    rotate_string(int.to_s).to_i
  end

  def rotate_rightmost_digits(number, n)
    return rotate_integer(number) if num_digits_equals_n(number, n)
    arr = number.to_s
    head = arr[0..(arr.size - n - 1)]
    tail = arr[(arr.size - n)..-1]
    (head + rotate_string(tail)).to_i
  end

  def max_rotation(number)
    n = number.to_s.size
    n.downto(2) do |i|
      number = rotate_rightmost_digits(number, i)
    end
    number
  end
  # def max_rotation(number)
  #   # this is a recursive max_rotation method
  #   # rotate_iter is a private method
  #   rotate_iter(number, number.to_s.size)
  # end

  private

  # def rotate_iter(number, n)
  #   return number if n == 1
  #   rotate_iter(rotate_rightmost_digits(number, n), n - 1)
  # end

  def num_digits_equals_n(number, n)
    number.to_s.size == n
  end
end
