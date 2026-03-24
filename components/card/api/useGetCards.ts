"use client";
import { useQuery } from "@tanstack/react-query";

import { useAuth } from "@/providers/AuthProvider";
import { getQuests } from "@/shared/lib/service";

export const useGetCards = () => {
  const { token } = useAuth();
  return useQuery({
    queryKey: ["all-quests"],
    queryFn: getQuests,
    enabled: !!token,
  });
};
