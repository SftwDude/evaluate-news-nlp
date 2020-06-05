function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //    .then(res => res.json())
    //    .then(function (res) {
    //        document.getElementById('results').innerHTML = res.message
    //    })

    if (Client.validURL(formText)) {
        fetch(`http://localhost:8081/sentiment?url=${formText}`)
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                document.getElementById('results').innerHTML = res.polarity;
            })
    }
    else {
        alert(`"${formText}" is NOT a valid URL`)
    }

}

export { handleSubmit }
