import { handleMenuInteraction } from './menu-interaction'
import { handleFormValidation } from './form-validation'

const _init = () => {
  handleMenuInteraction()
  handleFormValidation()
  console.log('Webpack and babel setup is working as expected')
}

document.addEventListener('DOMContentLoaded', _init)
