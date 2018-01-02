class HttpError extends Error { // (1)
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) { // (2)
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // HttpError: 404 for .../no-such-user.json
  
  /*
    
    We make a custom class for HTTP Errors to distinguish them from other types of errors. Besides, the new class has a constructor that accepts the response object and saves it in the error. So error-handling code will be able to access it.
    Then we put together the requesting and error-handling code into a function that fetches the url and treats any non-200 status as an error. That’s convenient, because we often need such logic.
    Now alert shows better message.

  */
