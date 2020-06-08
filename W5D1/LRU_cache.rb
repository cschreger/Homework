class LRUCache
    def initialize(max)
        @max_size = max
        @cache = []
    end

    def count
        @cache.length
    end

    def add(el)
        if @cache.count < self.max_size
            roomy_add(el)
        else
            full_add(el)
        end
    end

    def show
        p @cache
    end

    private
    def full_add(el)
        if @cache.include?(el)
            @cache.delete(el)
            @cache << el
        else
            @cache.shift
            @cache << el
        end
    end


    def roomy_add(el)
        if @cache.include?(el)
            @cache.delete(el)
            @cache << el
        else
            @cache << el
        end
    end
  end