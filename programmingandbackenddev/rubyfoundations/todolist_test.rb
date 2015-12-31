require 'minitest/autorun'
require "minitest/reporters"
require 'simplecov'
SimpleCov.start

Minitest::Reporters.use!

require_relative 'todolist'

class TodoListTest < MiniTest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = Todolist.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  # Your tests go here. Remember they must start with "test_"
  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_shift
    assert_equal(@todo1, @list.shift)
  end

  def test_size
    assert_equal(3, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_last
    assert_equal(@todo3, @list.last)
  end

  def test_shift
    todo = @list.shift
    assert_equal(@todo1, todo)
    assert_equal([@todo2, @todo3], @list.to_a)
  end

  def test_pop
    todo = @list.pop
    assert_equal(@todo3, todo)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_all_done
    @list.each { |todo| todo.done! }
    assert_equal(true, !!@list.all_done)
    @list.each { |todo| todo.undone! }
    assert_equal(false, !!@list.all_done)
  end

  def test_add_raise_error
    assert_raises(TypeError) { @list.add(1) }
    assert_raises(TypeError) { @list.add('hi') }
  end

  def test_alias_add
    assert_raises(TypeError) { @list << 1 }
    @todo4 = Todo.new("Go to movies")
    @list << @todo4
    assert_equal([@todo1, @todo2, @todo3, @todo4], @list.to_a)
  end

  def test_item_at
    assert_raises(IndexError) { @list.item_at(100) }
    assert_equal(@list.item_at(0), @todo1)
  end

  def test_mark_done_at
    assert_raises(IndexError) { @list.mark_done_at(100) }
    @list.mark_done_at(1)
    assert_equal(false, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(false, @todo3.done?)
  end

  def test_mark_undone_at
    assert_raises(IndexError) { @list.mark_undone_at(100) }
    @list.mark_undone_at(1)
    assert_equal(false, @todo1.done?)
    assert_equal(false, @todo2.done?)
    assert_equal(false, @todo3.done?)
  end

  def test_done!
    @list.each { |todo| todo.done! }
    @list.each { |todo| assert_equal(true, todo.done?) }
  end

  def remove_at
    assert_raises(IndexError) { @list.remove_at(100) }
    @list.remove_at(0)
    assert_equal([@todo2, @todo3], @list)
  end

  def test_to_s
    output = <<-OUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_to_s_2
    output = <<-OUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [X] Go to gym
    OUTPUT

    @list.mark_done_at(2)
    assert_equal(output, @list.to_s)
  end

  def test_to_s_3
    output = <<-OUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    OUTPUT

    @list.mark_all_done
    assert_equal(output, @list.to_s)
  end

  def test_each
    @list.mark_all_done
    @list.each { |todo| assert_equal(true, todo.done?) }
  end

  def test_each_2
    assert_equal(@list.each { |todo| }, @list)
  end

  def test_select
    selected = @list.select { |todo| todo.title[0] == "B" }
    assert_equal(Todolist, selected.class)
    assert_equal(Todolist.new("Today's Todos") << @todo1, selected.to_a)
  end

  def test_find_by_title
    assert_equal(@todo1, @list.find_by_title("Buy milk"))
  end

  def test_mark_all_undone
    assert_equal(@list, @list.mark_all_done.mark_all_undone)
  end
end