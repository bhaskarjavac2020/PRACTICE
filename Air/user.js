const userAction = async() => {
        const response = await ('http://164.52.212.42:8085/as-admin/admin/saveUserRole', {
            method: 'POST',
            body: {
                "name": "Rahul",
                "image": "Jay"
            }, // string or object
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json(); //extract JSON from the http response
    }
    // do something with myJson

/*
function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("POST", "http://164.52.212.42:8085/as-admin/admin/saveUserRole", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send({
        "name": "Rahull",
        "image": "Jay"
    });
}*/