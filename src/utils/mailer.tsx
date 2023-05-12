import axios from 'axios'

// -------------------------------------------------------------

type MailPayload = {
  securityCode?: string
  name: string
  email: string
  subject: string
  message: string
}

type MailResponse = {
  success: boolean
  message: string
}

// -------------------------------------------------------------

const instance = axios.create({
  baseURL: process.env.GATSBY_MAIL_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export const sendMail = async (data: MailPayload) => {
  const response = await instance.post<MailResponse>('/api/mail', {
    ...data,
    securityCode: process.env.GATSBY_MAIL_API_SECURITY_CODE,
  })
  return response.data
}
