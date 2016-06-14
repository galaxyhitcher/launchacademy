require 'minitest/autorun'
require_relative 'rotate'

class RotaterTest < Minitest::Test
  def setup
    @rot = Rotater.new
  end

  def test_rotation_of_array_of_fixnums
    assert_equal @rot.rotate_array([7, 3, 5, 2, 9, 1]), [3, 5, 2, 9, 1, 7]
  end

  def test_rotation_of_array_of_strings
    assert_equal @rot.rotate_array(['a','b','c']), ['b', 'c', 'a']
  end

  def test_rotation_of_list_containing_single_string
    assert_equal @rot.rotate_array(['a']), ['a']
  end

  def test_original_array_is_not_modified
    x = [1, 2, 3, 4]
    assert_equal @rot.rotate_array(x), [2, 3, 4, 1]
    assert_equal x, [1, 2, 3, 4]
  end
end
    

