import { ValidationComposite } from '../../presentation/helpers/validator/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helpers/validator/required-field-validation'
import { Validation } from '../../presentation/helpers/validator/validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
