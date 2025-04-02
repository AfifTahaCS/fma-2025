"use client";

import {
  Compass,
} from "@/components/shared/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SelectionPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm md:max-w-5xl px-5 xl:px-0 mt-10">
      <div className="space-y-6">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[4rem]"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Test de sélection
        </h1>

        <div
          className="mt-6 animate-fade-up text-center text-gray-800 opacity-0 [text-wrap:balance] md:text-lg"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <p className="mt-12">
            La sélection pour participer à{" "}
            <span className="bg-gradient-to-br from-sky-500 to-[#272162] inline-block text-transparent bg-clip-text">
              FMA Summer Camp
            </span>{" "}
            se déroule en deux phases distinctes. Le test commencera le{" "}
            <span className="font-bold">15 avril</span> –{" "}
            <span className="font-bold">pensez à bien bloquer cette date</span>.
          </p>

          <div className="mt-8 text-left md:text-center">
            <p className="font-bold mb-2">📝 Phase 1 – Rapport écrit :</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Choisissez un des thèmes que nous avons préparés.</li>
              <li>Répondez aux questions en rédigeant un rapport structuré.</li>
              <li>Soumettez votre travail via le formulaire en ligne.</li>
            </ul>

            <p className="font-bold mt-6 mb-2">🎙️ Phase 2 – Entretien (si nécessaire) :</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Nous examinerons tous les rapports soumis.</li>
              <li>Certains candidats pourront être invités à un court entretien.</li>
              <li>Enfin, nous annoncerons la sélection finale : environ 40 à 50 participants rejoindront le camp FMA.</li>
            </ul>
          </div>

          <p className="mt-8">
            Vous pouvez consulter les modalités de la sélection
            et les thèmes <span className="font-bold">FMA</span> de cette année :
          </p>
        </div>

        {/* 🔭 Cosmic Button */}
        <div
          className="flex justify-center p-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Link
            href="https://drive.google.com/drive/folders/1pGco8IvZCwchj4r12JQuhojZ9MRnbO90?usp=sharing"
            target="_blank"
          >
            <div className="relative h-36 w-36 rounded-full bg-gradient-to-br from-[#1e3a8a] via-indigo-600 to-purple-900 shadow-[0_0_40px_rgba(99,102,241,0.7)] hover:scale-105 transition-transform duration-500 animate-float flex items-center justify-center backdrop-blur-sm ring-2 ring-white/20">
              <span className="text-white font-semibold text-sm text-center z-10 pointer-events-none select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                🌠<br />
                Thèmes<br />
                2025/2026
              </span>

              {/* Pulsing orbit ring */}
              <div className="absolute w-[170%] h-[170%] border border-indigo-300/20 rounded-full animate-spin-slow pointer-events-none" />

              {/* Glowing comet moon */}
              <div className="absolute h-3.5 w-3.5 bg-white rounded-full right-0 top-2 shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-moon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
