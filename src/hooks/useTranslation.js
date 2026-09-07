import { useEffect, useRef, useState } from "react";
import { content as frContent } from "../data/content.js";
import { askClaude } from "../api.js";

export const LANGS = ["fr", "en", "de", "zh"];
export const LANG_LABEL = { fr: "FR", en: "EN", de: "DE", zh: "中文" };
export const LANG_NAME = { fr: "français", en: "English", de: "Deutsch", zh: "中文（简体）" };

// Renvoie le contenu du site dans la langue choisie.
// Le français est déjà écrit en dur. Pour les autres langues, on envoie le
// contenu français à Claude pour qu'il le traduise, puis on garde le résultat
// en mémoire pour ne pas le re-demander à chaque clic.
export function useTranslation(lang) {
  const [content, setContent] = useState(frContent);
  const [loading, setLoading] = useState(false);
  const cache = useRef({ fr: frContent });

  useEffect(() => {
    if (cache.current[lang]) {
      setContent(cache.current[lang]);
      return;
    }

    let cancelled = false;
    setLoading(true);

    askClaude(
      `Tu traduis le contenu d'un site web du français vers le ${LANG_NAME[lang]}. ` +
        `Traduis uniquement les valeurs de texte, garde exactement la même structure JSON ` +
        `(mêmes clés, même imbrication, mêmes tableaux). Ne traduis pas les noms propres ` +
        `(Thomas Martin, CERN, OpenClassrooms, Kasa, Mon Vieux Grimoire...). ` +
        `Réponds UNIQUEMENT avec le JSON traduit, sans markdown ni commentaire.`,
      JSON.stringify(frContent),
      0,
      4000
    )
      .then((translated) => {
        if (cancelled) return;
        cache.current[lang] = translated;
        setContent(translated);
      })
      .catch(() => {
        if (!cancelled) setContent(frContent); // si ça échoue, on reste en français
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [lang]);

  return { content, loading };
}
