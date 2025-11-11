type userId = string | number;

function getUserId(id: string | number) {
  if (typeof id === 'string') {
    return id.toUpperCase();
  }
  return id;
}

console.log(getUserId('123'));
console.log(getUserId(123));