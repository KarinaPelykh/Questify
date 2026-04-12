"use client";

import { QuestRes } from "../form/model/contract";
import { useGetCards } from "./api/useGetCards";
import { Quest } from "./Quest";
import { QuestContextProvider } from "./QuestContext";

export const QuestList = () => {
  const { data } = useGetCards();

  if (!data) return null;

  return (
    <>
      {data.map((quest: QuestRes) => (
        <QuestContextProvider key={quest._id} quest={quest}>
          <Quest />
        </QuestContextProvider>
      ))}
    </>
  );
};
