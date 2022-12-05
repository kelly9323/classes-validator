"use strict";
class RangeValidator {
  /**
   *
   * @param {number} from
   * @param {number} to
   */
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("from must be number");
    }
    else if (from > this._to) {
      throw new RangeError("from must be more than 0");
    }
    this._from = from;
  }
  get from() {
    return this._from;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("to must be number");
    }
    else if (to< this._from ) {
      throw new RangeError("to must be higher than from");
    }
    this._to = to;
  }
  get to() {
    return this._to;
  }

  get Range() {
    return [this._from, this._to];
  }
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("number must be number");
    }
    return number >= this._from && number <= this._to;
}
}

try {
  const range = new RangeValidator(3, 6);
  range.from = 2;
  range.to = 6;
  console.log(range);
  console.log(range.Range);
  console.log(range.validate(7));
} catch (error) {
  console.log(error);
}

