import { func, object } from 'prop-types'
import React, {Component} from 'react'
import Joi from 'joi-browser'

const getChild = (object, path) => {
  let item
  if (path.length > 1) {
    item = object[path[0]]
    for (var i = 1; i < path.length - 1; i++) {
      item = item[path[i]]
    }
    return {
      object: item,
      field: path.pop()
    }
  } else {
    return {
      object: object,
      field: path[0]
    }
  }
}

const joiValidate = (joi, joiObject, data) => {
  return new Promise((resolve, reject) => {
    let validations = {}
    Object.keys(data).forEach(field => validations[field] = {state: validationStates.CORRECT, error: null})
    joi.validate(data, joiObject, {abortEarly: false}, (err, data) => {
      if (err) {
        err.details.map((item) => {
          const { object, field } = getChild(data, item.path)
          if (typeof object[field] === 'undefined') return reject(`Error: field not found. ${field}`)
          if (object[field].toString().length === 0) {
            validations[item.path] = {
              state: validationStates.EMPTY,
              error: null
            }
          } else {
            validations[item.path] = {
              state: validationStates.WRONG,
              error: item.message
            }
          }
        })
      }
      return resolve({
        isValid: !err,
        validations,
        data
      })
    })
  })
}

const initialValidations = (data) => {
  let validations = { }
  Object.keys(data).forEach(field => validations[field] = {state: validationStates.EMPTY, error: null})
  return validations
}

export const validationStates = {
  CORRECT: 'correct',
  WRONG: 'wrong',
  EMPTY: 'empty'
}

export class Validator extends Component {
  static propTypes = {
    data: object.isRequired,
    joiObject: object.isRequired,
    joi: object
  }

  static defaultProps = {
    joi: Joi
  }

  constructor(props) {
    super(props)

    this.state = {
      isValid: false,
      validations: initialValidations(props.data),
      data: null
    }
  }

  componentDidMount () {
    this.handleFormValueChange(this.props)
  }

  componentWillReceiveProps (props) {
    this.handleFormValueChange(props)
  }

  handleFormValueChange = (props) => {
    joiValidate(props.joi, props.joiObject, props.data)
      .then(({ isValid, validations, data }) => this.setState({ isValid, validations, data }))
      .catch(ex => {
        console.log(ex)
        throw ex
      })
  }

  render() {
    return this.props.children(this.state.isValid, this.state.validations, this.state.data)
  }
}
