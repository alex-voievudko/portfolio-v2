import React, { useState } from 'react'

import { useFormik, FormikHelpers } from 'formik'
import { useStaticQuery, graphql } from 'gatsby'
import { FiSend } from 'react-icons/fi'
import * as Yup from 'yup'

import { Button, Toast } from '@components'
import { sendMail } from '@utils'

import * as S from './Form.styles'

// -------------------------------------------------------------

type Data = {
  allPages: {
    edges: {
      node: {
        contact_section: {
          form: {
            title: string
            subtitle: string
            button_lable: string
          }
        }
      }
    }[]
  }
}

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

// -------------------------------------------------------------

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
})

// -------------------------------------------------------------

export const Form = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPages(filter: { page_id: { eq: "contact-page" } }) {
        edges {
          node {
            contact_section {
              form {
                title
                subtitle
                button_lable
              }
            }
          }
        }
      }
    }
  `)
  const { title, subtitle, button_lable } = data.allPages.edges[0].node.contact_section.form

  // FORMIK
  const initialValues: FormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  // STATE
  const [showToast, setShowToast] = useState(false)
  const [toastStatus, setStatus] = useState({
    success: false,
    message: '',
  })

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const { name, email, subject, message } = values
    try {
      await sendMail({ name, email, subject, message })
      setStatus({
        success: true,
        message: 'Your message has been sent successfully',
      })
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      actions.setSubmitting(false)
      actions.resetForm()
    } catch (error) {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again',
      })
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      actions.setSubmitting(false)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  })

  console.log(formik.status)

  return (
    <>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Form onSubmit={formik.handleSubmit}>
          {/* NAME */}
          <S.InputContainer>
            <S.Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              $error={!!formik.touched.name && !!formik.errors.name}
            />
            {formik.touched.name && formik.errors.name ? <S.Error>{formik.errors.name}</S.Error> : null}
          </S.InputContainer>

          {/* EMAIL */}
          <S.InputContainer>
            <S.Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              $error={!!formik.touched.email && !!formik.errors.email}
            />
            {formik.touched.email && formik.errors.email ? <S.Error>{formik.errors.email}</S.Error> : null}
          </S.InputContainer>

          {/* SUBJECT */}
          <S.InputContainer>
            <S.Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              $error={!!formik.touched.subject && !!formik.errors.subject}
            />
            {formik.touched.subject && formik.errors.subject ? <S.Error>{formik.errors.subject}</S.Error> : null}
          </S.InputContainer>

          {/* MESSAGE */}
          <S.InputContainer>
            <S.TextArea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              $error={!!formik.touched.message && !!formik.errors.message}
            />
            {formik.touched.message && formik.errors.message ? <S.Error>{formik.errors.message}</S.Error> : null}
          </S.InputContainer>

          {/* SUBMIT */}

          <S.ButtonWrapper>
            <Button variant="solid" as="button" type="submit" disabled={formik.isSubmitting} rightIcon={<FiSend />}>
              {button_lable}
            </Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Container>

      {/* TOAST */}
      <Toast show={showToast} success={toastStatus.success} message={toastStatus.message} />
    </>
  )
}
