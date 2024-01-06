function getPromise<T extends (string | number)[]>() {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise()
  .then((data) => {
    console.log(data);
});
export{}