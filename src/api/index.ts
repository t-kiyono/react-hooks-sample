function asyncIncrement(v: number) {
  return new Promise<number>((resolve, reject) => {
    if (v > 1) {
      reject("parameter is too large");
    } else {
      setTimeout(() => resolve(v), 1000);
    }
  })
  .then(result => ({ result }))
  .catch(error => ({ error }));
}

export default {
  asyncIncrement,
}
