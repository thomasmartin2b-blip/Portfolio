// Fonction backend (Vercel) qui appelle l'API Claude avec la clé secrète.
// La clé n'est jamais visible côté navigateur.
// Utilisée par le quiz et par la traduction du site.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: { message: "Méthode non autorisée" } });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: { message: "Clé API manquante côté serveur (ANTHROPIC_API_KEY)" } });
    return;
  }

  const { systemPrompt, userPrompt, temperature, maxTokens } = req.body || {};
  if (!systemPrompt || !userPrompt) {
    res.status(400).json({ error: { message: "systemPrompt et userPrompt sont requis" } });
    return;
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: typeof maxTokens === "number" ? maxTokens : 400,
        temperature: typeof temperature === "number" ? temperature : 0.7,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: { message: "Erreur lors de l'appel à l'API Anthropic" } });
  }
}
