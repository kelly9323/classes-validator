"use strict"
class RangeValidator {
  /**
   *
   * @param {number} from
   * @param {number} to
   */
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("from must be number");
    }
    if (from < MIN_VALUE) {
      throw new RangeError("from must be more than 0");
    }
    this._from = from;
  }
  set to(to) {
    if (this.from > to) {
      throw new RangeError("to must be higher than from");
    }
    if (typeof to !== "number") {
      throw new TypeError("to must be number");
    }
    if (to > MAX_VALUE) {
      throw new RangeError("to must be less than max value");
    }
    this._to = to;
  }

  getRange() {
    return `${this.from} to ${this.to} `;
  }
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("number must be number");
    }
    if (number > 6 && number < 20) {
      return true;
    }
    return false;
  }
}

try {
  const range = new RangeValidator(3, 6);
  range.from = 2;
  range.to = 6;
  console.log(range);
  console.log(range.getRange());
  console.log(range.validate(7));
} catch (error) {
  console.log(error);
}
