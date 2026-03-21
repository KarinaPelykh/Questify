"use client";
import { useAuth } from "@/providers/AuthProvider";
import { getQuests } from "@/shared/lib/service";
import { useQuery } from "@tanstack/react-query";

export const useGetCards = () => {
  const { token } = useAuth();
  return useQuery({
    queryKey: ["all-cards"],
    queryFn: getQuests,
    enabled: !!token,
  });
};
