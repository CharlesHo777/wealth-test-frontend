import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { WealthArchetype } from '../App';

interface QuestionnaireProps {
  onComplete: (archetype: WealthArchetype) => void;
}

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    archetype: Exclude<WealthArchetype, null>;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "When you think about your financial future, what matters most to you?",
    options: [
      { text: "Security and stability for my loved ones", archetype: "the-guardian" },
      { text: "Building lasting wealth and legacy", archetype: "the-builder" },
      { text: "Freedom to pursue creative passions", archetype: "the-creator" },
      { text: "Supporting and empowering others", archetype: "the-nurturer" },
      { text: "Making bold moves and creating impact", archetype: "the-visionary" },
    ],
  },
  {
    id: 2,
    question: "How do you approach financial decisions?",
    options: [
      { text: "Careful analysis and risk mitigation", archetype: "the-guardian" },
      { text: "Strategic planning with long-term focus", archetype: "the-builder" },
      { text: "Following intuition and inspiration", archetype: "the-creator" },
      { text: "Considering impact on community", archetype: "the-nurturer" },
      { text: "Embracing calculated risks for growth", archetype: "the-visionary" },
    ],
  },
  {
    id: 3,
    question: "What gives you the most satisfaction with money?",
    options: [
      { text: "Knowing I'm protected against uncertainty", archetype: "the-guardian" },
      { text: "Watching my investments grow systematically", archetype: "the-builder" },
      { text: "Investing in experiences and self-expression", archetype: "the-creator" },
      { text: "Sharing resources and lifting others up", archetype: "the-nurturer" },
      { text: "Funding innovative ideas and ventures", archetype: "the-visionary" },
    ],
  },
  {
    id: 4,
    question: "Your ideal relationship with money is:",
    options: [
      { text: "A safety net that protects what matters", archetype: "the-guardian" },
      { text: "A tool for creating generational wealth", archetype: "the-builder" },
      { text: "A resource for creative freedom", archetype: "the-creator" },
      { text: "A means to make a difference", archetype: "the-nurturer" },
      { text: "Fuel for transformational change", archetype: "the-visionary" },
    ],
  },
  {
    id: 5,
    question: "When facing a financial opportunity, you typically:",
    options: [
      { text: "Assess all risks before proceeding", archetype: "the-guardian" },
      { text: "Evaluate ROI and long-term potential", archetype: "the-builder" },
      { text: "Consider if it aligns with my values", archetype: "the-creator" },
      { text: "Think about who else could benefit", archetype: "the-nurturer" },
      { text: "Jump in if the vision excites me", archetype: "the-visionary" },
    ],
  },
];

export function Questionnaire({ onComplete }: QuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Exclude<WealthArchetype, null>>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionSelect = (optionIndex: number, archetype: Exclude<WealthArchetype, null>) => {
    setSelectedOption(optionIndex);
    setAnswers({ ...answers, [questions[currentQuestion].id]: archetype });
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Calculate result
      const archetypeCounts: Record<string, number> = {};
      Object.values(answers).forEach((archetype) => {
        archetypeCounts[archetype] = (archetypeCounts[archetype] || 0) + 1;
      });

      const result = Object.entries(archetypeCounts).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0] as Exclude<WealthArchetype, null>;

      onComplete(result);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-amber-900/60 tracking-wide">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-amber-900/60 tracking-wide">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-amber-900/10 p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl text-amber-900 mb-8 leading-relaxed font-light">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index, option.archetype)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                  selectedOption === index
                    ? 'border-amber-600 bg-amber-50 shadow-md'
                    : 'border-amber-200 bg-white hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === index
                        ? 'border-amber-600 bg-amber-600'
                        : 'border-amber-300'
                    }`}
                  >
                    {selectedOption === index && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-amber-900/90 text-lg">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-6 py-3 text-amber-900/70 hover:text-amber-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full hover:shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <span>{currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
