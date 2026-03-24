"use client";
import { useGetCards } from "./api/useGetCards";
import { QuestRes } from "../form/model/contract";
import { QuestContextProvider } from "./QuestContext";
import { Quest } from "./Quest";

export const QuestList = () => {
  const { data } = useGetCards();

  if (!data) return null;

  return (
    <>
      {data.map((quest: QuestRes) => (
        <QuestContextProvider key={quest._id} questId={quest._id}>
          <Quest {...quest} />
        </QuestContextProvider>
      ))}
    </>
  );
};
