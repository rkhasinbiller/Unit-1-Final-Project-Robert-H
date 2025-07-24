export default function QuoteItem({ content, author }) {
  return (
    <div className="quote-item">
      <p>"{content}"</p>
      <p>— {author}</p>
    </div>
  );
}
