"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = {
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      sujet: (form.elements.namedItem("sujet") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur serveur");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3 mb-8">
        <div className="text-4xl">✅</div>
        <p className="font-bold text-emerald-800">Message envoyé !</p>
        <p className="text-emerald-600 text-sm">
          Nous vous répondrons sous 24h. Un email de confirmation vous a été envoyé.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-emerald-700 underline text-sm"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Prénom <span className="text-red-400">*</span>
            </label>
            <input
              name="prenom"
              type="text"
              placeholder="Jean"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nom <span className="text-red-400">*</span>
            </label>
            <input
              name="nom"
              type="text"
              placeholder="Dupont"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="jean@exemple.com"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Sujet
          </label>
          <select
            name="sujet"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
          >
            <option>Commande en cours</option>
            <option>Retour / Remboursement</option>
            <option>Question produit</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Décrivez votre demande..."
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
          />
        </div>

        {status === "error" && errorMsg && (
          <p className="text-red-500 text-xs bg-red-50 rounded-xl px-3 py-2">
            ⚠ {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>
      </form>
    </div>
  );
}
