from base_caching import BaseCaching

class LIFOCache(BaseCaching):
    """LIFO Cache class that inherits from BaseCaching and is a caching system."""

    def __init__(self):
        """Initialize the class by calling the parent class initializer."""
        super().__init__()
        self.stack = []

    def put(self, key, item):
        """Add an item to the cache with LIFO eviction policy.
        """
        if key is None or item is None:
            return

        if len(self.cache_data) == self.MAX_ITEMS and \
                key not in self.stack:
                discard = self.stack.pop()
                del self.cache_data[discard]
                print("DISCARD: {}".format(discard))
        self.stack.append(key)
        self.cache_data[key] = item

    def get(self, key):
        """Retrieve an item from the cache.
        """
        if key is None or key not in self.cache_data.keys():
            return None
        return self.cache_data.get(key)

