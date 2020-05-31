class Stack
    def initialize(arr)
      @stack = []
    end

    def push(el)
      @stack << el
    end

    def pop
      @stack.pop
    end

    def peek
      @stack.last
    end
  end
end


class Queue

  def initialize
    @queue = []
  end

  def enqueue
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue.last
  end

end

class Map

  def initialize
    @map = []
  end

  def set(key, value)
    pair_index = @map.index {|pair| pair[0] == key}

    if pairs
      @map[pair_index][1] = value
    else
      @map.push([key, value])
    end
  end

  end

  def get(key)
    @map.each {|pair| return pair[1] if pair[0] == key}
  end

  def delete(key)
    @map.reject! { |pair| pair[0] == key }
  end

  def show
    @map
  end

end
  
  