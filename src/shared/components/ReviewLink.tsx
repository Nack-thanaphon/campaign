interface ReviewLinkProps {
    placeId?: string;
  }
  
  export default function ReviewLink({ placeId }: ReviewLinkProps) {
    if (!placeId) return null;
  
    const reviewLink = `https://search.google.com/local/writereview?placeid=${placeId}`;
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(reviewLink).then(() => {
        alert('Review link copied!');
      });
    };
  
    return (
      <div style={{ marginTop: '10px' }}>
        <p><strong>Review Link:</strong> <a href={reviewLink} target="_blank" rel="noopener noreferrer">{reviewLink}</a></p>
        <button onClick={copyToClipboard}>Copy Link</button>
      </div>
    );
  }
  