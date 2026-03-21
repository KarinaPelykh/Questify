import * as v from "valibot";

export const QuestSchema = v.object({
  quest: v.pipe(v.string(), v.nonEmpty("Please enter quest")),
  status: v.pipe(v.string(), v.nonEmpty()),
  category: v.pipe(v.string(), v.nonEmpty()),
  date: v.pipe(v.string()),
});

export const QuestResSchema = v.object({
  category: v.string(),
  createdAt: v.string(),
  date: v.string(),
  owner: v.string(),
  quest: v.string(),
  status: v.string(),
  updatedAt: v.string(),
  _id: v.string(),
});

export type Quest = v.InferOutput<typeof QuestSchema>;
export type QuestRes = v.InferOutput<typeof QuestResSchema>;

export const QuestResArr = v.array(QuestResSchema);
