class Array
  def accumulate
    i = 0
    res = []
    while i < self.size
      res.push(yield self[i])
      i += 1
    end
    res
  end
end