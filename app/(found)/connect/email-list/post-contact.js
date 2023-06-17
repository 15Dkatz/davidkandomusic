'use server';

// data is an instance of FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData
export default async function postContact({ name, email }) {
  const apiKey = process.env.API_KEY;
  const secretKey = process.env.SECRET_KEY;
  console.log(`apiKey`, apiKey);
  console.log(`secretKey`, secretKey);
  console.log(`name`, name);
  console.log(`email`, email);
  const url = 'https://api.mailjet.com/v3/REST/contact';
  const body = JSON.stringify({ name, email, IsExcludedFromCampaigns: true });
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(apiKey + ":" + secretKey).toString('base64')}`
  };

  let response = {};
  const errorResponse = {
    status: 500,
    message: 'Subscription service unavailable. Try again or email davidkandomusic@gmail.com to subscribe manually.'
  };

  try {
    const fetchResponse = await fetch(url, { method: 'POST', headers, body });
    const json = await fetchResponse.json();
    const errorMessage = json['ErrorMessage'];
    console.log(`json`, json);
    console.log(`errorMessage`, errorMessage);

    if (json.Count > 0) {
      response = {
        status: 200,
        message: 'Success! Keep an eye on your inbox for updates.'
      }
    } else if (errorMessage && errorMessage.includes('already exists')) {
      response = {
        status: 400,
        message: 'Email is already subscribed.'
      }
    } else if (errorMessage && errorMessage.includes('properties invalid')) {
      response = {
        status: 400,
        message: 'Email is not formatted correctly.'
      }
    } else {
      response = errorResponse;
    }
  } catch (error) {
    console.error(`error`, error);
    response = errorResponse;
  }

  return response;
}
