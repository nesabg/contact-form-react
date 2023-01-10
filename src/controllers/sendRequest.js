 const sendRequest = (body, url) => {
    fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
}

export default sendRequest