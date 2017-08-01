(function(){
  if (typeof String.prototype.startsWith === 'undefined') {
    String.prototype.startsWith = function(str, start) {
      start = start || 0;
      return new RegExp('^' + str).test(this.slice(start));
    };
  }

  if (typeof String.prototype.endsWith === 'undefined') {
    String.prototype.endsWith = function(str, length) {
      length = length || this.length;
      return new RegExp(str + '$').test(this.slice(0, length));
    };
  }

  if (typeof String.prototype.includes === 'undefined') {
    String.prototype.includes = function(str, start) {
      start = start || 0;
      return new RegExp(str, 'gm').test(this.slice(start));
    };
  }

  if (typeof String.prototype.repeat === 'undefined') {
    String.prototype.repeat = function(number) {
      let result = '';
      for(let i = 0; i < number; i++) {
        result += this;
      }
      return result;
    };
  }

  if (typeof Array.prototype.includes === 'undefined') {
    Array.prototype.includes = function(item, start) {
      start = start || 0;
      var array = this.slice(start);
      for(var i = 0; i < array.length; i++) {
        if (array[i] === item) {
          return true;
        }
      }
      return false;
    };
  }


  if (typeof Array.prototype.find === 'undefined') {
    Array.prototype.find = function(fn, thisArg) {
      for(var i = 0; i < this.length; i++) {
        if (fn.call(thisArg || this[i], this[i], i, this)) {
          return this[i];
        }
      }
      return null;
    };
  }

  /*! http://mths.be/codepointat v0.1.0 от @mathias */
  if (!String.prototype.codePointAt) {
    (function() {
      'use strict';
      var codePointAt = function(position) {
        if (this == null) {
          throw TypeError();
        }
        var string = String(this);
        var size = string.length;
        var index = position ? Number(position) : 0;
        if (index != index) {
          index = 0;
        }
        if (index < 0 || index >= size) {
          return undefined;
        }
        var first = string.charCodeAt(index);
        var second;
        if (
          first >= 0xD800 && first <= 0xDBFF &&
          size > index + 1
        ) {
          second = string.charCodeAt(index + 1);
          if (second >= 0xDC00 && second <= 0xDFFF) {
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
          }
        }
        return first;
      };
      if (Object.defineProperty) {
        Object.defineProperty(String.prototype, 'codePointAt', {
          'value': codePointAt,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.codePointAt = codePointAt;
      }
    }());
  }
})();