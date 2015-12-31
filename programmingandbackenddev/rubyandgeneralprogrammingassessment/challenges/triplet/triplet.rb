class Array
  def product
    res = 1
    self.each do |i|
      res *= i
    end
    res
  end
end

class Triplet
  attr_reader :sum, :product, :a, :b, :c
  class Array
    def product
      res = 1
      self.each do |i|
        res *= i
      end
      res
    end
  end

  
  def initialize(a,b,c)
    @a = a
    @b = b
    @c = c
    @sum = a + b + c
    @product = a*b*c
  end

  def pythagorean?
    a**2 + b**2 == c**2
  end

  


  def self.where(ahash)
    res = []
    if(ahash.keys.include?(:max_factor) && ahash.keys.include?(:sum))
      arr = (1..ahash[:max_factor])
      arr.each do |i|
        arr.each do |j|
          arr.each do |k|
            if((i**2 + j**2 == k**2) && (i + j + k == ahash[:sum]))
              temp = []
              temp.push(i)
              temp.push(j)
              temp.push(k)
              res.push(temp)
            end
          end
        end
      end

    elsif(ahash.keys.include?(:max_factor) && ahash.keys.include?(:min_factor))
      arr = (ahash[:min_factor]..ahash[:max_factor]).to_a
      arr.each do |i|
        arr.each do |j|
          arr.each do |k|
            if(i**2 + j**2 == k**2)
              temp = []
              temp.push(i)
              temp.push(j)
              temp.push(k)
              res.push(temp)
            end
          end
        end
      end
    elsif(ahash.keys.include?(:max_factor))
      arr = (1..ahash[:max_factor]).to_a
      arr.each do |i|
        arr.each do |j|
          arr.each do |k|

            if(i**2 + j**2 == k**2)
              temp = []
              temp.push(i)
              temp.push(j)
              temp.push(k)
              res.push(temp)
            end
          end
        end
      end
    end
    res1 = []
    res.each do |triple|
      if(triple[0] < triple[1])
        res1.push(triple)
      end
    end
    res1

  end
end