'use server';

export default async function postContact(data) {
  // instance of FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData
  const apiKey = process.env.API_KEY;
  const secretKey = process.env.SECRET_KEY;

  console.log(`apiKey`, apiKey);
  console.log(`secretKey`, secretKey);

  const name = data.get('name');
  const email = data.get('email');

  let message;
  let status;

  const url = 'https://api.mailjet.com/v3/REST/contact';
  const body = JSON.stringify({ name, email, IsExcludedFromCampaigns: true });
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(apiKey + ":" + secretKey).toString('base64')}`
  };

  const response = await fetch(url, { method: 'POST', headers, body });
  const json = await response.json();
  const errorMessage = json['ErrorMessage'];

  console.log(`json`, json);
  console.log(`errorMessage`, errorMessage);

  if (json.Count > 0) {
    status = 200;
    message = 'Success! Keep an eye on your inbox for updates.';
  } else if (errorMessage && errorMessage.includes('already exists')) {
    status = 400;
    message = 'Email is already subscribed.';
  } else if (errorMessage && errorMessage.includes('properties invalid')) {
    status = 400;
    message = 'Email is not formatted correctly.';
  } else {
    status = 500;
    message = 'Subscription service unavailable. Try again or email davidkandomusic@gmail.com to subscribe manually.';
  }

  return ({ status, message });
}
