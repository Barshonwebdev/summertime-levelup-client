import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useEnrolled = () => {
  const { user } = useAuth();
  const { data: enrolledClasses = [], refetch } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://summertime-levelup.onrender.com/enrolledclasses?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [enrolledClasses, refetch];
};

export default useEnrolled;
