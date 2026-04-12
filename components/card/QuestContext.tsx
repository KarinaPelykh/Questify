import { createContext, ReactNode, useContext } from "react";

import { QuestRes } from "../form/model/contract";

type QuestContextProviderProps = {
  children: ReactNode;

  quest: QuestRes;
};

type QuestContextProps = {
  questId: string;
  quest: QuestRes;
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
  quest,
}: QuestContextProviderProps) => {
  return (
    <QuestContext.Provider value={{ quest, questId: quest._id }}>
      {children}
    </QuestContext.Provider>
  );
};
