export const contactInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

/**
 * Backend integration contract for contact form submission.
 * Keep keys stable so API payload mapping stays predictable.
 */
export const contactBackendContract = {
  endpoint: '/api/contact',
  method: 'POST',
  payloadShape: {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    message: 'string',
    source: 'web_contact_form',
  },
}

export function buildContactPayload(values) {
  return {
    first_name: values.firstName.trim(),
    last_name: values.lastName.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
    source: 'web_contact_form',
  }
}
