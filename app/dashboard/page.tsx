"use client"

import { useState } from "react"
import Link from "next/link"
import QuestionCard from "@/components/question-card"

// Hardcoded mock questions
const MOCK_QUESTIONS = [
  {
    id: 1,
    subject: "Physics",
    question: "A stone is thrown upward with a velocity of 10 m/s. What is the time taken to reach the maximum height?",
    options: [
      { id: "a", text: "1 second", isCorrect: true },
      { id: "b", text: "2 seconds", isCorrect: false },
      { id: "c", text: "0.5 seconds", isCorrect: false },
      { id: "d", text: "1.5 seconds", isCorrect: false },
    ],
    explanation: "Using v = u - gt, at maximum height v = 0. So, 0 = 10 - 10t, therefore t = 1 second.",
  },
  {
    id: 2,
    subject: "Chemistry",
    question: "What is the electronic configuration of Oxygen (Z = 8)?",
    options: [
      { id: "a", text: "1s² 2s² 2p⁴", isCorrect: true },
      { id: "b", text: "1s² 2s² 2p³", isCorrect: false },
      { id: "c", text: "1s¹ 2s² 2p⁵", isCorrect: false },
      { id: "d", text: "1s² 2s¹ 2p⁵", isCorrect: false },
    ],
    explanation: "Oxygen has 8 electrons. Configuration: 2 electrons in 1s, 2 in 2s, and 4 in 2p orbitals.",
  },
  {
    id: 3,
    subject: "Mathematics",
    question: "What is the derivative of f(x) = x³ + 2x² - 5?",
    options: [
      { id: "a", text: "3x² + 4x", isCorrect: true },
      { id: "b", text: "3x² + 4", isCorrect: false },
      { id: "c", text: "x² + 4x", isCorrect: false },
      { id: "d", text: "3x + 4x", isCorrect: false },
    ],
    explanation: "Using power rule: d/dx(x³) = 3x², d/dx(2x²) = 4x, d/dx(-5) = 0. So f'(x) = 3x² + 4x",
  },
  {
    id: 4,
    subject: "Physics",
    question: "What is the SI unit of force?",
    options: [
      { id: "a", text: "Newton (N)", isCorrect: true },
      { id: "b", text: "Dyne", isCorrect: false },
      { id: "c", text: "Joule (J)", isCorrect: false },
      { id: "d", text: "Pascal (Pa)", isCorrect: false },
    ],
    explanation: "Newton (N) is the SI unit of force. 1 N = 1 kg⋅m/s². It is named after Sir Isaac Newton.",
  },
  {
    id: 5,
    subject: "Chemistry",
    question: "Which of the following is an endothermic process?",
    options: [
      { id: "a", text: "Combustion", isCorrect: false },
      { id: "b", text: "Neutralization", isCorrect: false },
      { id: "c", text: "Melting of ice", isCorrect: true },
      { id: "d", text: "Condensation", isCorrect: false },
    ],
    explanation:
      "Melting of ice is endothermic because it absorbs heat from surroundings. Energy is required to break intermolecular forces.",
  },
]

export default function Dashboard() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0)

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex]
  const isAnswerCorrect = selectedAnswer && currentQuestion.options.find((opt) => opt.id === selectedAnswer)?.isCorrect

  const handleAnswerSelect = (optionId: string) => {
    if (!showResult) {
      setSelectedAnswer(optionId)
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer && !showResult) {
      setShowResult(true)
      if (isAnswerCorrect) {
        setScore(score + 1)
      }
      setAnsweredQuestions(answeredQuestions + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const isLastQuestion = currentQuestionIndex === MOCK_QUESTIONS.length - 1
  const isQuizComplete = showResult && isLastQuestion

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-950/95 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <div className="text-2xl font-bold text-white">JEE</div>
              <span className="text-sm text-slate-400">Exam Practice</span>
            </Link>
            <div className="text-sm text-slate-400">
              Question {currentQuestionIndex + 1} / {MOCK_QUESTIONS.length}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">Progress</span>
            <span className="text-white font-semibold">{answeredQuestions} answered</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
              style={{ width: `${(answeredQuestions / MOCK_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {isQuizComplete && (
          <div className="mb-8 rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur p-6">
            <div className="border-b border-slate-700 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-white">Quiz Complete!</h2>
              <p className="text-sm text-slate-400">Here's your final score</p>
            </div>
            <div className="space-y-4">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  {score} / {MOCK_QUESTIONS.length}
                </div>
                <p className="text-lg text-slate-400">
                  You got {Math.round((score / MOCK_QUESTIONS.length) * 100)}% correct
                </p>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setCurrentQuestionIndex(0)
                      setSelectedAnswer(null)
                      setShowResult(false)
                      setScore(0)
                      setAnsweredQuestions(0)
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Retake Quiz
                  </button>
                  <Link href="/" className="flex-1">
                    <button className="w-full border border-slate-600 text-white hover:bg-slate-800 bg-transparent font-semibold py-3 px-4 rounded-lg transition-colors">
                      Back to Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Question Card */}
        {!isQuizComplete && (
          <>
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              isAnswerCorrect={isAnswerCorrect}
              onAnswerSelect={handleAnswerSelect}
            />

            <div className="mt-8 flex gap-4">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="flex-1 border border-slate-600 text-white hover:bg-slate-800 disabled:opacity-50 bg-transparent font-semibold py-3 px-4 rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {!showResult ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 font-semibold py-3 px-4 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={isLastQuestion}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  {isLastQuestion ? "View Results" : "Next Question"}
                </button>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
