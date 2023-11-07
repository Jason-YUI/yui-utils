//输入想要检测的json数据 如果为空返回返回false
export function isNullObject(data) {
  if (typeof data === "object") {
    let hasProp = false;
    for (const prop in data) {
      hasProp = true;
      break;
    }
    if (hasProp) {
      return false;
    }
    return true;
  } else {
    throw "data is not object";
  }
}