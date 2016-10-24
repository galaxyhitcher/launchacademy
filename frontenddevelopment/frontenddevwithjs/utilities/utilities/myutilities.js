// TODO: refactor findWhere and where
var _ = function(element) {
  u = {
    first: function() {
      return element[0];
    },
    last: function() {
      return element[element.length - 1];
    },
    without: function() {
      var args = arguments;
      notPassed = function(el) {
        !Array.prototype.slice.call(args).includes(el);
      };
      return element.filter(notPassed);
    },
    lastIndexOf: function(val) {
      return element.reduce(function(prev, curr, i) {
        return (curr === val ? i : prev);
      });
    },
    sample: function(n) {
      if (arguments.length === 0) {
        var randomIndex = Math.floor(Math.random() * element.length);
        return element[randomIndex];
      } else {
        var indices = [];
        while (indices.length < n) {
          var randomIndex = Math.floor(Math.random() * element.length);
          if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
          }
        };

        function indexToElement(i) {
          return element[i];
        };

        return indices.map(indexToElement);
      };
    },
    findWhere: function(passed) {
      return element.find(function(obj) {
        for (k in passed) {
          if (passed[k] !== obj[k]) {
            return false;
          };
        };

        return true;
      });
    },
    where: function(passed) {
      return element.filter(function(obj) {
        for (k in passed) {
          if (passed[k] !== obj[k]) {
            return false;
          };
        };

        return true;
      });
    },
    pluck: function(key) {
      return element.filter(function(e) {
        return e.hasOwnProperty(key);
      })
      .map(function(e) {
        return e[key];
      });
    },
    keys: function() {
      return Object.keys(element);
    },
    values: function() {
      return Object.keys(element)
                   .map(function(key) {
                     return element[key];
                   });
    },
    pick: function() {
      var new_obj = {};
      for (var i = 0; i < arguments.length; i++) {
        new_obj[arguments[i]] = element[arguments[i]];
      };
      return new_obj;
    },
    omit: function() {
      var new_obj = {};
      var args = Array.prototype.slice.call(arguments);
      for (prop in element) {
        if (!(args.includes(prop))) {
          new_obj[prop] = element[prop];
        }
      }
      return new_obj;
    },
    has: function(prop) {
      return Object.keys(element).includes(prop);
    },
    isElement: function(e) {
      return e instanceof Element;
    },
    isArray: function(e) {
      return Array.isArray(e);
    },
    isObject: function(e) {
      return e === Object(e);
    },
    isFunction: function(e) {
      return typeof e === 'function' || e instanceof Function;
    },
    isBoolean: function(e) {
      return typeof(e) === 'boolean' || e instanceof Boolean;
    },
    isString: function(e) {
      return typeof(e) === 'string' || e instanceof String;
    },
    isNumber: function(e) {
      return typeof(e) === 'number' || e instanceof Number;
    },
  };

  return u;
};

Object.defineProperties(_, {
  range: {
    value: function() {
      var result = [];
      if (arguments.length === 1) {
        for (var i = 0; i < arguments[0]; i++) {
          result.push(i);
        }
      } else if (arguments.length === 2) {
        for (var i = arguments[0]; i < arguments[1]; i++) {
          result.push(i);
        }
      }
      return result;
    },
  },
  extend: {
    value: function(destination) {
      // var sources = arguments.slice(1);
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (k in source) {
          destination[k] = source[k];
        };
      }

      return destination;
    },
  },
  isElement: {
    value: function(e) {
      return e instanceof Element;
    },
  },
  isArray: {
    value: function(e) {
      return Array.isArray(e);
    },
  },
  isObject: {
    value: function(e) {
      return e === Object(e);
    },
  },
  isFunction: {
    value: function(e) {
      return typeof e === 'function' || e instanceof Function;
    },
  },
  isBoolean: {
    value: function(e) {
      return typeof(e) === 'boolean' || e instanceof Boolean;
    },
  },
  isString: {
    value: function(e) {
      return typeof(e) === 'string' || e instanceof String;
    },
  },
  isNumber: {
    value: function(e) {
      return typeof(e) === 'number' || e instanceof Number;
    },
  },
});
