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

  try {
    const url = 'https://api.mailjet.com/v3/REST/contact';
    const body = JSON.stringify({ name, email, IsExcludedFromCampaigns: true });
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(apiKey + ":" + secretKey).toString('base64')}`
    };

    const response = await fetch(url, { method: 'POST', headers, body });
    const json = await response.json();

    console.log(`json`, json);

    let message;

    if (json.Count > 0) {
      message = "Success! Keep an eye on your inbox for updates."
    } else if (json.ErrorMessage && json.ErrorMessage.includes('Email already exists')) {
      throw new Error("Email is already subscribed.");
    } else if (json.ErrorMessage && json.ErrorMessage.includes('properties invalid')) {
      throw new Error("Email is not formatted correctly.");
    } else {
      throw new Error("Submission failed. Try again.");
    }

    res.status(200).send({ message, result: json });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Submission failed. Try again.' });
  }
}