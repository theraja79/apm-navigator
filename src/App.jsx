import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { AnswerDisplay } from './components/AnswerDisplay';
import { RoleWizard } from './components/RoleWizard';
import { AccessibilityTools } from './components/AccessibilityTools';
import './App.css';

export default function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [citations, setCitations] = useState([]);

  const handleSearch = async (query) => {
    setQuestion(query);
    // Simulated search - replace with backend API call
    const simulatedAnswer = `"Faculty must include the following in their syllabus: course description, grading policy, office hours, and accessibility statement."`;
    const simulatedCitations = ["APM 241 - Course Syllabi Requirements"];
    setAnswer(simulatedAnswer);
    setCitations(simulatedCitations);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <AccessibilityTools />
        <SearchBar onSearch={handleSearch} />
        <AnswerDisplay answer={answer} citations={citations} />
        <RoleWizard />
      </main>
    </div>
  );
}