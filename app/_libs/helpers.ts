import { PortableText } from "../types/Type";

// THIS FUNCTION SIMPLY EXTRACTS THE MAINTEXT FROM THE RICHTEXT(PORTABLE TEXT) SANITY GIVES US
export function extractPlainText(blocks: PortableText): string {
  if (!blocks) return "";

  return blocks
    .filter((block) => block._type === "block" && Array.isArray(block.children))
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("\n\n");
}
