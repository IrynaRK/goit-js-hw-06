class Storage {
  #items; // Приватна властивість для зберігання товарів

  constructor(items) {
    this.#items = items; // Ініціалізація масиву товарів
  }

  getItems() {
    return this.#items; // Повертає масив поточних товарів
  }

  addItem(newItem) {
    this.#items.push(newItem); // Додає новий товар до масиву
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove); // Видаляє товар з масиву
  }
}

// Перевірка коректності роботи
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
