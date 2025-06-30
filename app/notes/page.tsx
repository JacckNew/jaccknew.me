// Notes page for displaying study notes and reflections.
export const metadata = {
  title: 'Notes',
  description: 'Study notes, academic papers, and reflections on coursework.',
}

export default function NotesPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      <p className="text-neutral-700 dark:text-neutral-300 mb-6">
        This page collects my study notes, summaries of academic papers, and reflections on coursework across computer science and digital humanities.
      </p>

      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Natural Language Processing:</strong> POS tagging using HMM, grammar engineering with feature structures, and sentiment analysis pipelines.
        </li>
        <li>
          <strong>Data Visualization:</strong> Projects on visualizing global violence, green finance, and social inequality using D3.js and Tableau.
        </li>
        <li>
          <strong>Human-Computer Interaction:</strong> Notes from lectures and readings on interface design, usability heuristics, and user testing.
        </li>
        <li>
          <strong>Readings:</strong> Summaries and insights from books and papers that shaped my understanding of ethics, design justice, and digital culture.
        </li>
      </ul>
    </section>
  );
}