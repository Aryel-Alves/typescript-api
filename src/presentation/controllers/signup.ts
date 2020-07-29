import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    let response
    requiredFields.forEach((field) => {
      if (!httpRequest.body[field]) {
        response = badRequest(new MissingParamError(field))
      }
    })
    return response
  }
}
