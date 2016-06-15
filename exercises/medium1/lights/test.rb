require 'minitest/autorun'
require_relative 'lights'

class BankTest < Minitest::Test
  def test_number_on_in_bank_with_5_lights
    @bank = Bank.new(5)
    assert_equal @bank.how_many_turned_on?, 2
  end

  def test_which_lights_turned_on_in_5_light_bank 
    @bank = Bank.new(5)
    assert_equal @bank.which_lights_turned_on?, [1, 4]
  end

  def test_number_on_in_bank_with_10_lights
    @bank = Bank.new(10)
    assert_equal @bank.how_many_turned_on?, 3
  end

  def test_which_lights_turned_on_in_10_light_bank
    @bank = Bank.new(10)
    assert_equal @bank.which_lights_turned_on?, [1, 4, 9]
  end
end
