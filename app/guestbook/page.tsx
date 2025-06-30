// Guestbook page component
import GiscusGuestbook from './giscus-guestbook'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Leave a message! Whether you\'re a friend, classmate, or curious visitor — I\'d love to hear from you.',
}

export default function GuestbookPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Guestbook</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6">
        Leave a message! Whether you're a friend, classmate, or curious visitor — I'd love to hear from you.
      </p>

      <GiscusGuestbook />
    </section>
  );
}
