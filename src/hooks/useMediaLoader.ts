import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// useMediaLoader
//
// Downloads a media file (image, gif, video, …) via XMLHttpRequest so we can
// report real byte-level progress while it loads. Once the download finishes
// the bytes are handed back as a blob URL — the media element then renders
// straight from memory, so the user never sees a second network fetch.
//
// Usage:
//   const { state, loadedBytes, totalBytes, blobUrl } = useMediaLoader(src, {
//     enabled: inView,
//   });
// ─────────────────────────────────────────────────────────────────────────────

export type MediaLoadState = "idle" | "loading" | "loaded" | "error";

export interface UseMediaLoaderOptions {
  /** Gate the download — e.g. keep it disabled until the media is in view. */
  enabled?: boolean;
}

export interface UseMediaLoaderResult {
  state: MediaLoadState;
  /** Bytes received so far (updates during download). */
  loadedBytes: number;
  /** Total bytes when the server reports Content-Length, otherwise null. */
  totalBytes: number | null;
  /** Object URL of the downloaded blob once loading has finished. */
  blobUrl: string | null;
}

export function useMediaLoader(
  src: string | undefined,
  { enabled = true }: UseMediaLoaderOptions = {},
): UseMediaLoaderResult {
  const [state, setState] = useState<MediaLoadState>("idle");
  const [loadedBytes, setLoadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState<number | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!src || !enabled) {
      setState("idle");
      setLoadedBytes(0);
      setTotalBytes(null);
      setBlobUrl(null);
      return;
    }

    let cancelled = false;
    let objectUrl: string | null = null;

    setState("loading");
    setLoadedBytes(0);
    setTotalBytes(null);
    setBlobUrl(null);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", src);
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (cancelled) return;
      if (event.lengthComputable) setTotalBytes(event.total);
      setLoadedBytes(event.loaded);
    };

    xhr.onload = () => {
      if (cancelled) return;
      if (xhr.status >= 200 && xhr.status < 300 && xhr.response) {
        objectUrl = URL.createObjectURL(xhr.response);
        setBlobUrl(objectUrl);
        setState("loaded");
      } else {
        setState("error");
      }
    };

    xhr.onerror = () => {
      if (!cancelled) setState("error");
    };

    xhr.onabort = () => {
      if (!cancelled) setState("error");
    };

    xhr.send();

    return () => {
      cancelled = true;
      xhr.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src, enabled]);

  return { state, loadedBytes, totalBytes, blobUrl };
}
