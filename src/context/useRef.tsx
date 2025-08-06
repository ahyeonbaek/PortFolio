import { createContext, useContext, useRef } from "react";

interface RefContextProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToContent: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const RefContext = createContext<RefContextProps | null>(null);

export const useRefContext = () => {
  const context = useContext(RefContext);
  if (!context)
    throw new Error("useRefContext must be used within a RefProvider");
  return context;
};

export const RefProvider = ({ children }: { children: React.ReactNode }) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContent = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <RefContext.Provider
      value={{ aboutRef, projectRef, skillRef, contactRef, scrollToContent }}
    >
      {children}
    </RefContext.Provider>
  );
};
