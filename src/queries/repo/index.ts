import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Root } from "./types";

async function getRepos() {
  const { data } = await api.get<Root[]>("/users/VituSuperMEg/repos");
  return data;
}
export default function useFetchRepos() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: getRepos,
  });
}
