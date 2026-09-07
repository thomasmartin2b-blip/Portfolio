// Envoie une requête à Claude via le backend (utilisé par le quiz et la traduction)
export async function askClaude(systemPrompt, userPrompt, temperature = 0.7, maxTokens = 400) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ systemPrompt, userPrompt, temperature, maxTokens }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || `Erreur API (${response.status})`);
  }
  const text = data.content.map((b) => b.text || "").join("\n");
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Réponse inattendue du modèle : " + text.slice(0, 120));
  return JSON.parse(match[0]);
}
