// src/store/refsStore.ts
import { create } from "zustand";
import React from "react";

type RefsStore = {
  refs: {
    hero: React.RefObject<HTMLDivElement>;
    features: React.RefObject<HTMLDivElement>;
    work: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    impact: React.RefObject<HTMLDivElement>;
    creativeEng: React.RefObject<HTMLDivElement>;
    digitalEng: React.RefObject<HTMLDivElement>;
    experienceEng: React.RefObject<HTMLDivElement>;
  };
  setRef: (name: keyof RefsStore["refs"], ref: React.RefObject<HTMLDivElement>) => void;
};

export const useRefStore = create<RefsStore>((set) => ({
  refs: {
    hero: React.createRef(),
    features: React.createRef(),
    work: React.createRef(),
    experience: React.createRef(),
    impact: React.createRef(),
    creativeEng: React.createRef(),
    digitalEng: React.createRef(),
    experienceEng: React.createRef(),
  },
  setRef: (name, ref) =>
    set((state) => ({
      refs: {
        ...state.refs,
        [name]: ref,
      },
    })),
}));
