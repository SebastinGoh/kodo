import { FormData } from '@/app/(pages)/contact/contact-form';

export async function sendEmail(data:FormData) {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then((response) => {
    return response;
  })
  .catch((err) => {
    return err;
  });

  return response;
}