function solution(my_string) {
  let result = "";

  for (let ch of my_string) {
    if (ch === ch.toUpperCase()) {
      result += ch.toLowerCase();
    } else {
      result += ch.toUpperCase();
    }
  }

  return result;
}
