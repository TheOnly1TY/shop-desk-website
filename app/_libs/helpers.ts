import { Slide, ToastPosition } from "react-toastify";
import { PortableText } from "../types/Type";

// THIS FUNCTION SIMPLY EXTRACTS THE MAINTEXT FROM THE RICHTEXT(PORTABLE TEXT) SANITY GIVES US
function extractPlainText(blocks: PortableText): string {
  if (!blocks) return "";

  return blocks
    .filter((block) => block._type === "block" && Array.isArray(block.children))
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("\n\n");
}

const ToastProperties = {
  position: "top-left" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Slide,
};

export { extractPlainText, ToastProperties };
