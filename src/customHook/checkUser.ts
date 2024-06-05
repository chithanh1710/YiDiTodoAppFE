import { useMutation } from "@tanstack/react-query";
import { checkUserApi } from "../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/contextApi";

export const useCheckUser = () => {
  const { setUserId } = useTodo();
  const navigate = useNavigate();
  const { mutate: checkUser, isPending: isCheck } = useMutation({
    mutationKey: ["checkUser"],
    mutationFn: checkUserApi,
    onSuccess: (data) => {
      setUserId(data.userId);
      navigate("/app?userID=" + data.userId);
      toast.success("Login successful");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
      toast.error("Login failed");
    },
  });
  return { checkUser, isCheck };
};
