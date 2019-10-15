export class StorageHelper {
  static setItem(data, key) {}

  static getItem(key) {
    const result = sessionStorage.getItem(key);
    return result;
  }
}
