/** Item in a shopping cart. */
const items = require("./fakeDb")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    items.push(this);
  }

  static allItems() {
    return items
  }
  /** Update found item with matching name to data. */

  static update(name, data) {
    let idx = Item.find(name);
    if (idx === undefined) {
        throw (err)
    }
    idx.name = data.name;
    idx.price = data.price;
    return idx;
}


  /** Find & return item with matching name. */

  static find(name) {
    let idx = items.find(i => i.name === name);
    if (idx === undefined) {
        throw (err)
    }
    return idx;
}


  /** Remove item with matching id. */


  static remove(name) {
    let idx = items.findIndex(i => i.name === name);
    if (idx === -1) {
        throw (e)
    }
    items.splice(idx, 1);
}
}

module.exports = Item;
