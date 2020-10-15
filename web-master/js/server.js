var unirest = require("unirest");

var req = unirest("GET", "https://quotes15.p.rapidapi.com/quotes/random/");

req.query({
    "language_code": "en"
});

req.headers({
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": "2348e8aa46msh0160084f0fe2c2dp19d7a5jsne8a728d124ff",
    "useQueryString": true
});


req.end(function(res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body);
});