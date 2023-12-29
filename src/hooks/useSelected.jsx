import { useQuery } from "@tanstack/react-query";

const useSelected = () => {
    const {data:selectedClasses=[],refetch}=useQuery({
        queryKey:['selectedClasses'],
        queryFn:async()=>{
            const res= await fetch(`http://localhost:5000/selectedclasses`);
            return res.json();
        }
    })

    return [selectedClasses,refetch];
    
};

export default useSelected;