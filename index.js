class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    return this.items.sort((a,b) => {
      if(a > b) return 1
      else if (a < b) return -1
      else return 0
    })
  }

  get(pos) {
    if(!this.items[pos]) {
      throw new OutOfBoundsError();
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length == 0)  {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

    sum() {
      let total = 0
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i]
      }
      return total
    }
  
    avg() {
      if(this.items.length == 0)  {
        throw new Error('EmptySortedList');
      }
      let sum = 0;

      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      }
  
      return sum / this.items.length
    }
  }


module.exports = SortedList;
