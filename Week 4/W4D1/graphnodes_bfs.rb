class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        @val = val
        @neighbors = []
    end

    
    def bfs(start_node, target)
        queue = [start_node]
        visited = Set.new()
        
        while !queue.empty?
            first = queue.shift
            if !visited.include?(first)
                return first if first.value == target_value
                visited.add(first)
                queue += first.neighbors
            end
        end 
        nil
    end
end