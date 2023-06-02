import { handleMenuInteraction } from './menu-interaction'
import { handleFormValidation } from './form-validation'

const _init = () => {
  handleMenuInteraction()
  handleFormValidation()
  console.log('Working as expected')
}

document.addEventListener('DOMContentLoaded', _init)
