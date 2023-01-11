 //Send POST request with javascript fetch API 
 
 const sendRequest = (body, url) => {
    //We recieve body of message and url where to send this request
    fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) //Convert data to json
      });
}

export default sendRequest