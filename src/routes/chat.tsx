import { Link } from "react-router-dom";

export default function ChatPage() {
  return (
    <>
      <h1>Chat</h1>
      <p>This is a chat page that is public for now.</p>
      <ul>
        <li><Link to="/">Return to Index</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </>
  );
}
