// curl -s \
// -X POST \
// --user "$MJ_APIKEY_PUBLIC:$MJ_APIKEY_PRIVATE" \
// https://api.mailjet.com/v3/REST/contact \
// -H 'Content-Type: application/json' \
// -d '{
//     "IsExcludedFromCampaigns":"true",
//     "Name":"New Contact",
//     "Email":"passenger@mailjet.com"
// }'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'POST request required.'});
    return;
  }

  const apiKey = process.env.API_KEY;
  const secretKey = process.env.SECRET_KEY;

  // body-parser is built into Next 13.
  const { name, email } = req.body;
  console.log(`req.body`, req.body);

  try {
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

    let status;
    let message;

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

    res.status(status).send({ message, ...(status === 200 ? { json } : {} ) });
  } catch (err) {
    console.log(`err`, err);
    res.status(500).send({ message: 'Subscription service unavailable. Try again or email davidkandomusic@gmail.com to subscribe manually.' });
  }
}