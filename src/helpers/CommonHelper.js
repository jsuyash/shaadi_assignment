export class CommonHelper {
  static formatDate(dateString, option = {}) {
    let config = {};
    if (option && Object.keys(option).length === 0) {
      config = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
    } else {
      config = { ...option };
    }

    return new Date(dateString).toLocaleDateString("en-IN", config);
  }
}
