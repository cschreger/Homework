class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) {Array.new}
    place_stones
  end

  def place_stones
    @cups.each_with_index do |cup, i|
      4.times {cup << :stone} unless i == 6 || i == 13
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 0 || start_pos > 13
    raise "Invalid starting cup" if start_pos == 6 || start_pos == 13
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos].length
    @cups[start_pos] == []
    next_cup_index = start_pos

    stones.times do |i|
      next_cup_index += 1
      next_cup_index = 0 if next_cup_index == 13

      case current_player_name
      when @player1_name
        next_cup_index = 0 if next_cup_index == 13
      when @player2_name
        next_cup_index = 7 if next_cup_index = 6
      end
      cups[next_cup_index] << :stone
    end

    render 
    next_turn(next_cup_index)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 13 || ending_cup_idx == 6
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[7..12].all?{&:empty?)|| @cups[1..6].all?(&:empty?)
  end

  def winner
  end
end
