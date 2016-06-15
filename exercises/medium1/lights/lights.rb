# This class represents a bank of lights
class Bank
  def initialize(number_of_lights)
    @number_of_lights = number_of_lights
    @light_array = Array.new(number_of_lights, false)
    toggle_lights
  end

  def how_many_turned_on?
    @light_array.count { |e| e }
  end

  def which_lights_turned_on?
    @light_array.each_index
                .select { |i| @light_array[i] }
                .map { |i| i + 1 }
  end

  private

  def toggle_lights
    @number_of_lights.times do |i|
      @light_array = @light_array.map.with_index do |e, j|
        (j + 1) % (i + 1) == 0 ? !e : e
      end
    end
  end
end
