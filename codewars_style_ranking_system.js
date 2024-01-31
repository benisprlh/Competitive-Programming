class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  rank() {
    console.log(this.rank);
  }

  progress() {
    console.log(this.progress);
  }

  incProgress(rank) {
    if (rank > 8 || rank < -8 || rank === 0) {
      throw 'error';
    }

    if (this.rank === 8) {
      return;
    }

    let range = 0;
    if (rank > 0 && this.rank < 0) {
      range = rank - this.rank - 1;
    } else {
      range = rank - this.rank;
    }

    if (rank === this.rank) {
      this.progress += 3;
    } else if (rank > this.rank) {
      this.progress += 10 * range * range;
      //       console.log(this.progress, range);
    } else {
      this.progress += 1;
    }

    if (this.progress >= 100) {
      const rankPoint = Math.floor(this.progress / 100);
      for (let i = 0; i < rankPoint; i++) {
        if (this.rank + 1 === 0) {
          this.rank += 2;
        } else {
          this.rank += 1;
        }
      }
      if (this.rank === 8) {
        this.progress = 0;
      } else {
        this.progress = this.progress % 100;
      }
    }
  }
}

var user = new User();
console.log(user.rank); // => -8
console.log(user.progress); // => 0
console.log(user.incProgress(-7));
console.log(user.progress); // => 10
console.log(user.incProgress(-5)); // will add 90 progress
console.log(user.progress); /*# => 0 // progress is now zero */
console.log(user.rank);
// # => -7 // rank was upgraded to -7
