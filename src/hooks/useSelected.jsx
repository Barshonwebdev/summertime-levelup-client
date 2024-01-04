import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelected = () => {
  const { user } = useAuth();
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://summertime-levelup-server.vercel.app/selectedclasses?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [selectedClasses, refetch];
};

export default useSelected;
