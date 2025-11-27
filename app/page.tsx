import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-white">JEE</div>
              <span className="text-sm text-slate-400">Exam Practice</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-white">
                Master{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  JEE Exams
                </span>
              </h1>
              <p className="text-xl text-slate-400">
                Practice thousands of JEE Main and Advanced questions with instant feedback. Track your progress and
                improve your score.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <p className="text-sm text-slate-400">Questions</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99%</div>
                <p className="text-sm text-slate-400">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <p className="text-sm text-slate-400">Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Instant</div>
                <p className="text-sm text-slate-400">Feedback</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard" className="flex-1">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Start Practice Now
                </button>
              </Link>
              <button className="flex-1 border border-slate-600 text-white hover:bg-slate-800 bg-transparent font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative rounded-2xl border border-slate-700 bg-slate-900/50 backdrop-blur p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-400">Question 1 of 10</span>
                  </div>
                  <p className="text-base font-semibold text-white">What is the value of sin(30°)?</p>
                  <div className="space-y-2">
                    {["0.5", "0.707", "0.866", "1"].map((option, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-slate-600 bg-slate-800/50 p-3 text-sm text-slate-300 hover:border-blue-500 cursor-pointer"
                      >
                        ({String.fromCharCode(65 + i)}) {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Multiple Subjects",
              description: "Physics, Chemistry, and Mathematics",
            },
            {
              title: "Detailed Solutions",
              description: "Step-by-step explanations for each question",
            },
            {
              title: "Performance Analytics",
              description: "Track your weak areas and improve",
            },
          ].map((feature, i) => (
            <div key={i} className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
