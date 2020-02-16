/* global emailjs */
import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { useForm, useField } from 'react-final-form-hooks'

import MuiTextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

const Root = styled.form`
  position: relative;
  box-sizing: border-box;
  background-color: whitesmoke;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  margin: 0;


  ${breakpoint('desktop')`
    width: 600px;
  `}
`

const BlurWrapper = styled.div`
  filter: ${props => props.blur ? 'blur(20px)' : 'none'};
  opacity: ${props => props.blur ? 0.3 : 1};
  transition: all 500ms;
  display: flex;
  flex-direction: column;
`

const Field = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const TextField = styled(MuiTextField)`
  width: 100%;
  max-width: 100%;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  z-index: 1;
  display: flex;
  flex-direction:  column;
`

const ContactForm = _props => {
  const [currentPhase, setCurrentPhase] = useState('formFilling')

  const { form, handleSubmit } = useForm({
    async onSubmit (values) {
      setCurrentPhase('submitting')

      try {
        await emailjs.send('gmail', 'personal_site_contact', values)
        setCurrentPhase('success')
      } catch (error) {
        setCurrentPhase('error')
      }
    }
  })

  const email = useField('email', form)
  const name = useField('name', form)
  const body = useField('body', form)

  return (
    <Root onSubmit={handleSubmit}>
      {currentPhase !== 'formFilling' && (
        <Overlay>
          {
            currentPhase === 'submitting' ? (
              <CircularProgress />
            ) : currentPhase === 'success' ? (
              <Typography variant='body1' paragraph>
                I will be answering soon, stand by!
              </Typography>
            ) : currentPhase === 'error' ? (
              <>
                <Typography variant='body1' paragraph>
                  There was an error.
                  Please try again later or send me an email
                </Typography>
                <Button variant='contained' onClick={_ => setCurrentPhase('formFilling')}>Retry</Button>
              </>
            ) : null
          }
        </Overlay>
      )}

      <BlurWrapper blur={currentPhase !== 'formFilling'}>
        <Field>
          <TextField {...email.input} label='Your email' type='email' required />
        </Field>

        <Field>
          <TextField {...name.input} label='Your name' required />
        </Field>

        <Field>
          <TextField {...body.input} label='How can I help you?' multiline rows={10} required />
        </Field>

        <Button type='submit' variant='contained' color='primary' disabled={currentPhase !== 'formFilling'}>Send</Button>
      </BlurWrapper>
    </Root>
  )
}

export default ContactForm
