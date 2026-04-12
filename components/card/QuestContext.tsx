import { createContext, ReactNode, useContext } from "react";

type QuestContextProviderProps = {
  children: ReactNode;
  questId: string;
};

type QuestContextProps = {
  questId: string;
};

const QuestContext = createContext<QuestContextProps | null>(null);

export const useQuestContext = () => {
  const questContext = useContext(QuestContext);

  if (!questContext) {
    throw new Error("questContext must be used with QuestContextProvider");
  }
  return questContext;
};

export const QuestContextProvider = ({
  children,
  questId,
}: QuestContextProviderProps) => {
  return (
    <QuestContext.Provider value={{ questId }}>
      {children}
    </QuestContext.Provider>
  );
};
