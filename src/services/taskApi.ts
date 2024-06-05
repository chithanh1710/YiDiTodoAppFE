const url = "https://todoappbe-598e.onrender.com/task/";

export const getTaskByUserId = (userId: string) => {
  return fetch(url + userId)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "fail") {
        throw new Error(data.message);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const deleteTaskApi = (taskId: string) => {
  return fetch(url + taskId, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "fail") {
        throw new Error(data.message);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
