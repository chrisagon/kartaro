import { toPng } from 'html-to-image';

export interface ExportOptions {
  fileName: string;
  pixelRatio?: number;
}

export async function exportElementAsPng(
  element: HTMLElement,
  { fileName, pixelRatio = 2 }: ExportOptions
): Promise<void> {
  const dataUrl = await toPng(element, { pixelRatio });

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function renderElementAsDataUrl(
  element: HTMLElement,
  pixelRatio = 2
): Promise<string> {
  return toPng(element, { pixelRatio });
}
