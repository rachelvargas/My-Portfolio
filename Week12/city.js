fetch("https://world-geo-data.p.rapidapi.com/cities/5128581", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "world-geo-data.p.rapidapi.com",
            "x-rapidapi-key": "e97717b644msh0449e20dd9955e0p10b925jsn1fa760646b88"
        }
    })
    .then(response => {
        console.log(response);
        let json = JSON.parse(response)
        console.log(json['name'])
    })
    .catch(err => {
        console.error(err);
    });
