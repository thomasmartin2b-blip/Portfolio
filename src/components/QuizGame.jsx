import { useRef, useState } from "react";
import { askClaude } from "../api.js";
import { PALETTE } from "../theme.js";
import { LANG_NAME } from "../hooks/useTranslation.js";

const QUIZ_THEMES = ["histoire", "géographie", "sciences", "art", "sport", "cinéma", "musique", "littérature", "gastronomie", "espace"];

export default function QuizGame({ t, theme, lang }) {
  const [status, setStatus] = useState("idle"); // idle -> loading -> ready -> checking -> done
  const [question, setQuestion] = useState(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const askedRef = useRef([]);
  const firstAskedRef = useRef(false);

  const newQuestion = async () => {
    setStatus("loading");
    setError(null);
    setResult(null);
    setInput("");

    // La toute première question est facile, toutes les suivantes sont difficiles
    const difficulty = firstAskedRef.current ? "difficile" : "facile";
    firstAskedRef.current = true;

    try {
      const topic = QUIZ_THEMES[Math.floor(Math.random() * QUIZ_THEMES.length)];
      const avoid = askedRef.current.slice(-8);
      const difficultyPrompt =
        difficulty === "facile"
          ? "Difficulté : très facile, une question de culture générale basique que tout le monde connaît."
          : "Difficulté : très difficile, une question de culture générale pointue et pour spécialistes (obscure, technique, précise).";
      const q = await askClaude(
        `Tu génères une question de culture générale dont la réponse tient en un mot ou une courte expression. ${difficultyPrompt} Écris la question ET la réponse en ${LANG_NAME[lang]}. Réponds UNIQUEMENT avec un JSON strict, sans markdown, au format exact : {"question": "...", "answer": "..."}`,
        `Génère une nouvelle question sur le thème : ${topic}. Elle doit être différente de ces questions déjà posées : ${avoid.length ? avoid.join(" | ") : "(aucune)"}.`,
        1
      );
      askedRef.current.push(q.question);
      setQuestion({ ...q, difficulty });
      setStatus("ready");
    } catch (e) {
      setError(e.message || "Erreur inconnue");
      setStatus("idle");
    }
  };

  const submitAnswer = async () => {
    if (!input.trim()) return;
    setStatus("checking");
    setError(null);
    try {
      const diffNote = question.difficulty === "facile" ? "C'était une question facile." : "C'était une question difficile, pour spécialistes.";
      const r = await askClaude(
        `Tu juges si une réponse d'utilisateur correspond à la bonne réponse d'un quiz (tolère fautes de frappe, accents, majuscules, formulations proches). Écris ta réponse ('reply') en ${LANG_NAME[lang]}. Réponds UNIQUEMENT avec un JSON strict, sans markdown, au format exact : {"correct": true ou false, "reply": "..."}. Si correct=false, 'reply' est une pique taquine et drôle (pas méchante) qui se moque gentiment de l'utilisateur en 1-2 phrases, en le tutoyant si la langue le permet — insiste un peu plus si la question était facile ("même ça tu le rates ?"), sois un peu plus indulgent (mais toujours taquin) si elle était difficile. Si correct=true, 'reply' est une phrase de félicitation courte et fanfaronne, plus impressionnée si la question était difficile.`,
        `Question (${diffNote}) : "${question.question}"\nBonne réponse : "${question.answer}"\nRéponse de l'utilisateur : "${input}"`
      );
      setResult(r);
      setStatus("done");
    } catch (e) {
      setError(e.message || "Erreur inconnue");
      setStatus("ready");
    }
  };

  return (
    <section id="quiz" className="theme-fade px-6 sm:px-16 py-24 scroll-mt-20" style={{ backgroundColor: theme.bgAlt }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl font-black leading-[0.9] mb-3">{t.title}</h2>
        <p className="font-body mb-8" style={{ color: theme.textMuted }}>{t.subtitle}</p>

        <div className="rounded-2xl p-6 sm:p-8 border" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
          {status === "idle" && (
            <button onClick={newQuestion} className="font-body text-sm px-5 py-3 rounded-full" style={{ backgroundColor: theme.text, color: theme.bg }}>
              {t.launch}
            </button>
          )}

          {status === "loading" && <p className="font-body text-sm" style={{ color: theme.textMuted }}>{t.thinking}</p>}

          {(status === "ready" || status === "checking") && question && (
            <div>
              <p className="font-body text-lg mb-5">{question.question}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="quiz-answer" className="sr-only">{t.placeholder}</label>
                <input
                  id="quiz-answer"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitAnswer()}
                  disabled={status === "checking"}
                  placeholder={t.placeholder}
                  className="flex-1 font-body text-sm px-4 py-3 rounded-full border focus:outline-none disabled:opacity-50"
                  style={{ backgroundColor: theme.card, borderColor: theme.border, color: theme.text }}
                />
                <button
                  onClick={submitAnswer}
                  disabled={status === "checking" || !input.trim()}
                  className="font-body text-sm px-5 py-3 rounded-full disabled:opacity-40"
                  style={{ backgroundColor: theme.text, color: theme.bg }}
                >
                  {status === "checking" ? t.checking : t.validate}
                </button>
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div>
              <p className="font-body text-sm mb-1" style={{ color: theme.textMuted }}>
                {t.correctLabel}
                <span style={{ color: theme.text }}>{question.answer}</span>
              </p>
              <p className="font-display text-2xl font-black mt-3 mb-5" style={{ color: result.correct ? PALETTE[0] : PALETTE[1] }}>
                {result.reply}
              </p>
              <button onClick={newQuestion} className="font-body text-sm px-5 py-3 rounded-full" style={{ backgroundColor: theme.text, color: theme.bg }}>
                {t.next}
              </button>
            </div>
          )}

          {error && <p className="font-body text-sm mt-4" style={{ color: PALETTE[1] }}>{error}</p>}
        </div>
      </div>
    </section>
  );
}
