fetch("http://localhost:8000/instagram/",
    {
        method: "POST",
        body: JSON
        .stringify
        ({
          url : "https://www.instagram.com/reel/DFsRT7xty4x/?igsh=MTF5bnAwMWgydDB5NQ=="
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));