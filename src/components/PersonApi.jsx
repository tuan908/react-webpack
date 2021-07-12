const fetchData = async () => {
  try {
    return fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((res) => res.results[0]);
  } catch (error) {
    console.error(error);
  }
};

const wrapPromise = (promise) => {
  let status = "PENDING";
  let result = "";

  let suspender = promise.then(
    (r) => {
      status = "SUCCESS";
      result = r;
    },
    (err) => {
      status = "ERROR";
      result = err;
    }
  );

  return {
    read() {
      if (status === "PENDING") {
        throw suspender;
      } else if (status === "ERROR") {
        throw result;
      }

      return result;
    },
  };
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchData()),
  };
};
