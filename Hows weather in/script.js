const nth = function(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

month_names_short: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

async function fetchData(searchParameter) {
    let url =
        "https://api.weatherapi.com/v1/search.json?key=6683827c15654ba2bdf154028211404&q=" +
        searchParameter;
    let response = await fetch(url);

    if (response.ok) {
        // if https-status is 200-299
        // get the response body (the method explained below)
        let cities = await response.json();
        document.getElementById("search").style.borderRadius = "20px 20px 0px 0px";
        document.getElementById("search-results").style.display = "block";
        document.getElementById("mylist").innerHTML = "";

        if (cities.length == 0) {
            document.getElementById("search").style.borderRadius =
                "20px 20px 20px 20px";
            document.getElementById("search-results").style.display = "none";
            document.getElementById("not-found").style.display = "";

            document.getElementById("not-found").classList.remove("hide-this");
            document.getElementById("content").classList.add("hide-this");
        } else {
            document.getElementById("not-found").classList.add("hide-this");

            cities.forEach((element) => {
                document.getElementById("mylist").innerHTML +=
                    '<div class="d-flex res" onclick="selectCity(\'' +
                    element.name.split(",")[0] +
                    "')\"" +
                    '><i class="fa fa-map-marker mys " aria-hidden="true"></i><li>' +
                    element.name +
                    " </li></div>";
            });
        }

        return 1;
    } else {
        document.getElementById("not-found").classList.remove("hide-this");
        document.getElementById("search").style.borderRadius =
            "20px 20px 20px 20px";
        document.getElementById("search-results").style.display = "none";
        //alert("https-Error: " + response.status);
        document.getElementById("content").classList.add("hide-this");
        return 0;
    }
}

function getCities() {
    let searchTerm = document.getElementById("search-input").value;
    fetchData(searchTerm);
}

var _timer = 0;

function DelayedCallMe(num) {
    if (_timer) window.clearTimeout(_timer);
    _timer = window.setTimeout(function() {
        getCities();
    }, 500);
}

const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const randomAngle = () => {
    return Math.floor(Math.random() * 360) + "deg";
};

async function selectCity(city) {
    document.getElementById("loader").classList.remove("hide-this");
    document.getElementById("content").classList.add("hide-this");

    document.getElementById("search").style.borderRadius = "20px 20px 20px 20px";
    document.getElementById("search-results").style.display = "none";
    let url =
        "https://api.weatherapi.com/v1/current.json?key=6683827c15654ba2bdf154028211404&q=" +
        city +
        "&aqi=no";
    let response = await fetch(url);

    if (response.ok) {
        let weather = await response.json();
        document.getElementById("city-card").style.backgroundImage =
            "linear-gradient(" +
            randomAngle() +
            "," +
            randomColor() +
            "," +
            randomColor() +
            ")";
        document.getElementById("content").style.display = "";

        document.getElementById("temp-image").src = weather.current.condition.icon;

        document.getElementById("temperature").textContent = weather.current.temp_c;
        document.getElementById("condition").textContent =
            weather.current.condition.text;
        document.getElementById("city").textContent =
            weather.location.name + "," + weather.location.country;

        let date = new Date().toString().split(" ")[2];
        let postfix = nth(date);
        let month = new Date().toString().split(" ")[1];
        document.getElementById("temp-date").textContent =
            date + "" + postfix + " " + month;

        document.getElementById("loader").classList.add("hide-this");
        document.getElementById("content").classList.remove("hide-this");
        return 1;
    } else {
        document.getElementById("not-found").classList.remove("hide-this");
        return 0;
    }
}

function init() {
    selectCity("chittoor");
}