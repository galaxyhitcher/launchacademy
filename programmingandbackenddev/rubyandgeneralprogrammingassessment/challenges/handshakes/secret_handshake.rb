class SecretHandshake
  attr_accessor :num
  def initialize(num)
    @num = num
  end

  def commands
    if(@num.to_i != 0)
      binary = @num.to_s(2)
    else
      return []
    end

    res = []
    res.push('wink') if binary[-1] == '1'
    res.push('double blink') if binary[-2] == '1'
    res.push('close your eyes') if binary[-3] == '1'
    res.push('jump') if binary[-4] == '1'
    res.reverse! if binary[-5] == '1'
    res
  end
end