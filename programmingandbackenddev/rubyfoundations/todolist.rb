# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end
end

class Todolist
  attr_accessor :title

  def initialize(title = "New Todolist")
    @title = title
    @todos = []
  end

  def add(todo)
    if todo.class != Todo
      raise TypeError.new "Can only add Todo objects"
    end
    @todos << todo
  end

  alias_method :<<, :add

  def size
    @todos.size
  end

  def first
    @todos[0]
  end

  def last
    @todos[-1]
  end

  def item_at(index)
    raise IndexError.new if index > @todos.size || index < 0
    @todos[index]
  end

  def mark_done_at(index)
    raise IndexError.new if index > @todos.size
    @todos[index].done!
  end

  def mark_undone_at(index)
    raise IndexError.new if index > @todos.size
    @todos[index].undone!
  end

  def shift
    @todos.shift
  end

  def pop
    @todos.pop
  end

  def remove_at(index)
    raise IndexError.new
    @todos.delete_at(index)
  end

  def to_s
    final = "---- #{title} ----" + "\n"
    @todos.each { |todo| final += todo.to_s + "\n" }
    final.chop
  end

  def to_a
    @todos
  end

  def each
    @todos.each { |todo| yield(todo) }
    self
  end

  def select
    result = Todolist.new(title)
    each { |todo| result.add(todo) if yield(todo) }
    result
  end

  def find_by_title(search)
    each { |todo| return todo if todo.title == search }
    nil
  end

  def all_done
    result = select { |todo| todo.done? }
    return result.size > 0 ? result : nil
  end

  def not_all_done
    result = select { |todo| !todo.done? }
    return result.size > 0 ? result : nil
  end

  def mark_done(search)
    each do |todo|
      if todo.title == search
        todo.done!
        break
      end
    end
    self
  end

  def mark_all_done
    each { |todo| todo.done! }
  end

  def mark_all_undone
    each { |todo| todo.undone! }
  end
end