class Rotater
  def rotate_array(arr)
    arr[1..-1].push(arr[0])
  end
end
