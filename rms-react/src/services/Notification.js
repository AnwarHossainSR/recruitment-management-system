import { toast } from "react-toastify";

const design = {
  position: "top-right",
  autoClose: 8000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  progress: undefined,
};

export const notify = (msg, type) => {
  switch (type) {
    case "success":
      return toast.success(msg, design);
    case "error":
      return toast.error(msg, design);
    default:
      return toast.info(msg, design);
  }
};
