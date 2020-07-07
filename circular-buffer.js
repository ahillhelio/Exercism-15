//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = [];
  }

  write(toAdd) {
    if (this.buffer.length != this.size) {
      if (!(toAdd == null || toAdd == undefined)) this.buffer.push(toAdd);
    } else {
      throw new BufferFullError("full");
    }
  }

  read() {
    if (this.buffer.every((element) => element == undefined))
      throw new BufferEmptyError("empty");
    return this.buffer.shift();
  }

  forceWrite(toAdd) {
    if (this.buffer.length == this.size) this.buffer.shift();
    this.buffer.push(toAdd);
  }

  clear() {
    this.buffer = [];
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

export class BufferEmptyError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}
