import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Logitoolz AI Chatbot</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Welcome to Logitoolz AI Chatbot</h1>
        <p>This is your sales funnel assistant. Start chatting below!</p>
        <form method="POST" action="/api/sendLeadEmail">
          <input type="text" name="email" placeholder="Enter your email" required style={{ marginRight: '10px' }} />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}