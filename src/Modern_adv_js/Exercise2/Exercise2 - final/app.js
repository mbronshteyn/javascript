
let content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

for (let prop in pres) {
    console.log(prop + " " + typeof pres[prop]);
}

for (let prop in pres) {
    if (pres.hasOwnProperty(prop)) {
        console.log(prop + "  " + typeof pres[prop]);
    }
}
