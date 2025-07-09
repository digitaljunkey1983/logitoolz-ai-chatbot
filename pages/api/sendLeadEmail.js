export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    console.log("Received email:", email);

    return res.status(200).json({ message: 'Lead captured successfully', email });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}