import { handleSubmit } from './js/formHandler'
import { validURL } from './js/validURL'
import { updateFormResult } from './js/updateFormResults'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import sentimentImage from './assets/sentiment.png'

var i = document.getElementById("image").src=sentimentImage;

export {
    handleSubmit,
    validURL,
    updateFormResult
}
