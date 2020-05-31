class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        @val = val
        @neighbors = []
    end

    
    def bfs(start_node, target, visited = Set.new())
        queue = [start_node]
        
        while !queue.empty?
            first = queue.shift
            visited.add(queue.shift)
            return first if first.value == target_value
            first.children.each do |child|
                queue << child if !visited.include?(child)
            end
        end 
        nil
    end
end