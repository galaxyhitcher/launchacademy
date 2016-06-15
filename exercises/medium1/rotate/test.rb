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

  def test_rotation_of_string
    assert_equal @rot.rotate_string("string"), "trings"
  end

  def test_string_is_not_modified
    string = "string"
    @rot.rotate_string("string")
    assert_equal string, "string"
  end

  def test_rotate_single_letter_string
    assert_equal @rot.rotate_string("a"), "a"
  end

  def test_rotate_empty_string
    assert_equal @rot.rotate_string(""), ""
  end

  def test_rotate_an_integer
    assert_equal @rot.rotate_integer(12345), 23451
  end

  def test_rotate_a_single_digit_integer
    assert_equal @rot.rotate_integer(1), 1
  end

  def test_rotate_an_integer_with_zero_as_its_second_digit
    assert_equal @rot.rotate_integer(10234), 2341
  end
	
	def test_rotate_rightmost_digit
		assert_equal @rot.rotate_rightmost_digits(735291, 1), 735291
	end

	def test_rotate_rightmost_two_digits
		assert_equal @rot.rotate_rightmost_digits(735291, 2), 735219
	end

	def test_rotate_rightmost_three_digits
		assert_equal @rot.rotate_rightmost_digits(735291, 3), 735912
	end

	def test_rotate_rightmost_four_digits
		assert_equal @rot.rotate_rightmost_digits(735291, 4), 732915  
	end
	
	def test_rotate_rightmost_five_digits
		assert_equal @rot.rotate_rightmost_digits(735291, 5), 752913
	end
	
	def test_rotate_rightmost_six_digits
		assert_equal @rot.rotate_rightmost_digits(735291, 6), 352917
	end

  def test_max_rotation_of_large_number
    assert_equal @rot.max_rotation(735291), 321579
  end

  def test_max_rotation_of_single_digit
    assert_equal @rot.max_rotation(3), 3
  end

  def test_max_rotation_of_two_digit_number
    assert_equal @rot.max_rotation(35), 53
  end

  def test_max_rotation_of_number_containing_zero
    assert_equal @rot.max_rotation(105), 15
  end

  def test_max_rotation_of_number_containing_underscores
    assert_equal @rot.max_rotation(8_703_529_146), 7_321_609_845
  end
end
