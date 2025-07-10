export function AnswerDisplay({ answer, citations }) {
  return (
    <section className="answer-display">
      <h2>Answer</h2>
      {answer ? (
        <>
          <p>{answer}</p>
          <ul>
            {citations.map((cite, index) => (
              <li key={index}>{cite}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No answer yet. Ask a question above.</p>
      )}
    </section>
  );
}
