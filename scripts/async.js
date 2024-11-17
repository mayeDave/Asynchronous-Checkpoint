console.log('Hello WOrld');

//1
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    console.log(value);
  }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


//2
async function awaitCall() {
  const fetchData = () => new Promise(resolve => 
    setTimeout(() => resolve("Fetched data!"), 1000)
  );

  const data = await fetchData();
  console.log(data);
}

// Example usage
awaitCall();

//3
async function awaitCall() {
  const fetchData = () => new Promise((resolve, reject) => 
    setTimeout(() => reject(new Error("API call failed")), 1000)
  );

  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Example usage
awaitCall();

//4
async function chainedAsyncFunctions() {
  const logMessage = async (message, delay) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  };

  await logMessage("First function executed!", 1000);
  await logMessage("Second function executed!", 1000);
  await logMessage("Third function executed!", 1000);
}

// Example usage
chainedAsyncFunctions();


//5
async function concurrentRequests() {
  const fetchAPI = (apiName, delay) => new Promise(resolve => 
    setTimeout(() => resolve(`${apiName} data fetched`), delay)
  );

  const [api1, api2] = await Promise.all([
    fetchAPI("API 1", 1000),
    fetchAPI("API 2", 1000)
  ]);

  console.log("Results:", api1, api2);
}

// Example usage
concurrentRequests();


//6
async function parallelCalls(urls) {
  const fetchURL = url => new Promise(resolve => 
    setTimeout(() => resolve(`Data from ${url}`), 1000)
  );

  const results = await Promise.all(urls.map(fetchURL));
  console.log("Responses:", results);
}

// Example usage
parallelCalls(["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"]);





  