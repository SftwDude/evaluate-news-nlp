function updateFormResult(sediment) {
    document.getElementById('results').innerHTML = sediment.polarity;
}

export { updateFormResult }