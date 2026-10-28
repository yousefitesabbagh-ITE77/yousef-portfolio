import { whatsappLink } from "../data/site";

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-dock">
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-button" aria-label="Chat with Yousef on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a12 12 0 0 0 5.7 1.5h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4ZM12 21.8a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.4 4.6Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.3 3.1c.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.3.2 1.9.1.6-.1 1.8-.8 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>
    </div>
  );
}
