import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTaskApi } from "../services/taskApi";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isPending: isDelete } = useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => {
      toast.success("Task successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["taskList"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteTask, isDelete };
};
