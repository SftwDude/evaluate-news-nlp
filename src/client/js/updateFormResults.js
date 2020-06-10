function updateFormResult(sediment) {
    document.getElementById('polarity').innerHTML = sediment.polarity;
    document.getElementById('subjectivity').innerHTML = sediment.subjectivity;
    document.getElementById('text').innerHTML = sediment.text;
}

export { updateFormResult }