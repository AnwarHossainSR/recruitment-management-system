import { toast } from "react-toastify";

const design = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
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
