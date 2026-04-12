"use client";

import clsx from "clsx";
import { useState } from "react";

import { EditForm } from "../edit-form/EditForm";
import { ActionBtn } from "./ActionBtn";
import { DeleteDialog } from "./DeleteDialog";
import { QuestDone } from "./QuestDone";
import { QuestView } from "./QuestView";

export const Quest = () => {
  const [isDone, setIsDone] = useState(false);

  const [mode, setMode] = useState<"save" | "clear" | "done" | "">("");

  return (
    <article className="perspective-midrange">
      <div
        className={clsx(
          "bg-white rounded-xs transform-3d tablet-l:w-56 tablet-l:h-52   h-fit p-5  transition-all duration-500  group",
          isDone && "rotate-y-180",
        )}
      >
        {mode === "save" ? (
          <EditForm close={() => setMode("")}>
            <ActionBtn setMode={setMode} />
          </EditForm>
        ) : (
          <QuestView setIsDone={setIsDone} setMode={setMode} />
        )}

        {mode === "clear" && <DeleteDialog close={() => setMode("")} />}
        <QuestDone />
      </div>
    </article>
  );
};
