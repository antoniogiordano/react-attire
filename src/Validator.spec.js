import { configure } from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Joi from 'joi-browser'

import { Validator, validationStates } from './Validator'

configure({ adapter: new Adapter() })

const joiObject = Joi.object().keys({
  yolo: Joi.string().min(3).max(500).regex(/^[a-z\s]*$/).required(),
})

describe('Joi', () => {
  it('should show no errors', () => {
    let data = {yolo: 'swagswag'}
    const form = (
			<Validator data={data} joiObject={joiObject}>
        {(isValid, validations) => {
          return <div>
						<input name="yolo" value={data.yolo} onChange={() => null}/>
            {
              validations.yolo.state === validationStates.WRONG && <label>{validations.yolo.error}</label>
            }
					</div>
        }}
			</Validator>
    )

    const mounted = mount(form)
    setTimeout(() => {
      expect(mounted.find('div').find('label').length).toBe(0)
    }, 10)
  })

  it('should show an error label', () => {
    let data = {yolo: 'swag swag'}
    const form = (
			<Validator data={data} joiObject={joiObject}>
        {(isValid, validations) => {
          return <div>
						<input name="yolo" value={data.yolo} onChange={() => data.yolo = ''}/>
            {
              validations.yolo.state === validationStates.WRONG && <label>{validations.yolo.error}</label>
            }
					</div>
        }}
			</Validator>
    )

    const mounted = mount(form)
    mounted.find('input').simulate('change', { target: { name: 'yolo', value: 'y' } })
    setTimeout(() => {
      expect(mounted.find('div').find('label').length).toBe(1)
    }, 10)
  })
})
