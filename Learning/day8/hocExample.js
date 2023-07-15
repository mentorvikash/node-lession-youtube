// case 1: making api request and get data

function getData(url) {
  //   const response = axios.get(url);
  const response = {
    name: "vikash",
    sex: "male",
    age: "30",
  };
  return response;
}

function makeApiRequest(callback, name, age) {
  const url = `http//google.com?name=${name}&age=${age}`;
  return callback(url);
}

console.log(makeApiRequest(getData, "hari", 26));

// case 2: hoc to to give sum of all odd numbers in an array

const getOddNumbers = (arr) => {
  return arr.filter((el) => el % 2 !== 0);
};

const sumArrElement = (arr) => {
  const sum = arr.reduce((cur, accu) => cur + accu);
  return sum;
};

const sumOfAllOddNumbers = (getOddNumbers, sumArrElement) => {
  const array = [
    12, 14, 78, 12, 49, 13, 487, 154, 26, 32, 14, 17, 141, 369, 12,
  ];
  const oddNumberArr = getOddNumbers(array);
  return sumArrElement(oddNumberArr);
};

console.log(sumOfAllOddNumbers(getOddNumbers, sumArrElement));

// example 3rd

const getRequest = async (url) => {
  return axios.get(url);
};

const postRequest = async (url) => {
  return axios.post(url, body);
};

const putRequest = async (url, body) => {
  return axios.put(url, { body: body });
};

const deleteRequest = async (url, body) => {
  return axios.delete(url, body);
};

const fetchApi = async (url, method, body = {}) => {
  let data;
  switch (method) {
    case "GET":
      data = await getRequest(url);
      break;
    case "POST":
      data = await postRequest(url, body);
      break;
    case "PUT":
      data = await putRequest(url, body);
      break;
    case "DELETE":
      data = await deleteRequest(url, body);
      break;
    default:
      break;
  }
};
