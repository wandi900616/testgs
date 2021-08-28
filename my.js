function testGS() {


    const url = "https://script.google.com/macros/s/AKfycbwOJ_YHN9OOlytj4rx1jAAR00hIHE4iMFAm1B3no-FsbVC40mnl2zpgN_X9pN5oqI8D/exec"

    fetch(url).then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;

        });

}

document.getElementById("btn").addEventListener("click", testGS)


