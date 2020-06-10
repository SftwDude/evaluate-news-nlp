function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (Client.validURL(formText)) {
        fetch(`http://localhost:8081/sentiment?url=${formText}`)
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                Client.updateFormResult(res);
            })
    }
    else {
        alert(`"${formText}" is NOT a valid URL`)
    }
}

export { handleSubmit }
