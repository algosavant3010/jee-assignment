"use client"

interface QuestionCardProps {
  question: {
    id: number
    subject: string
    question: string
    options: Array<{
      id: string
      text: string
      isCorrect: boolean
    }>
    explanation: string
  }
  selectedAnswer: string | null
  showResult: boolean
  isAnswerCorrect?: boolean
  onAnswerSelect: (optionId: string) => void
}

export default function QuestionCard({
  question,
  selectedAnswer,
  showResult,
  isAnswerCorrect,
  onAnswerSelect,
}: QuestionCardProps) {
  return (
    <div className="border border-slate-700 bg-slate-900/50 backdrop-blur overflow-hidden rounded-xl">
      <div className="border-b border-slate-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-400 text-sm">{question.subject}</span>
          <div className="text-xs text-slate-500">Question #{question.id}</div>
        </div>
        <h3 className="text-white text-lg font-bold">{question.question}</h3>
      </div>

      <div className="p-6 space-y-4">
        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === option.id
            const showCorrect = showResult && option.isCorrect
            const showIncorrect = showResult && isSelected && !option.isCorrect

            return (
              <button
                key={option.id}
                onClick={() => onAnswerSelect(option.id)}
                disabled={showResult}
                className={`w-full text-left rounded-lg border-2 p-4 transition-all ${
                  showCorrect
                    ? "border-green-500 bg-green-500/10"
                    : showIncorrect
                      ? "border-red-500 bg-red-500/10"
                      : isSelected
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                } ${showResult ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-300">({String.fromCharCode(65 + index)})</div>
                    <div className="text-white mt-1">{option.text}</div>
                  </div>
                  {showCorrect && <span className="text-2xl text-green-500 flex-shrink-0">✓</span>}
                  {showIncorrect && <span className="text-2xl text-red-500 flex-shrink-0">✗</span>}
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation - Show after answer */}
        {showResult && (
          <div
            className={`mt-6 rounded-lg p-4 ${
              isAnswerCorrect
                ? "bg-green-500/10 border border-green-500/30"
                : "bg-yellow-500/10 border border-yellow-500/30"
            }`}
          >
            <p className="text-sm font-semibold text-white mb-2">{isAnswerCorrect ? "✓ Correct!" : "Explanation:"}</p>
            <p className="text-sm text-slate-300">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}
