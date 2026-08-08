import { cn } from "@utils/cn";
import { useMediaLoader } from "@hooks/useMediaLoader";
import type { MediaKind } from "@/types/common.types";
import styles from "./MediaLoader.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// MediaLoader — renders an image/gif/video/youtube with a byte-count loading
// indicator ("Media Loading (xKB)") shown until the file has finished loading.
//
// The file is pre-downloaded with progress tracking (see useMediaLoader) and
// rendered from a blob URL, so the indicator reflects real download progress
// and the media never loads twice.
//
// Usage:
//   <MediaLoader
//     src="images/photo.webp"
//     alt="Profile photo"
//     className={styles.wrapperClass}        // applied to the root wrapper
//     mediaClassName={styles.imgClass}       // applied to the <img>/<video>
//   />
//
// Pass `enabled={false}` (e.g. until the element is in view) to defer the
// download entirely — nothing is fetched until it flips back to true.
// ─────────────────────────────────────────────────────────────────────────────

export interface MediaLoaderProps {
  src?: string;
  kind?: MediaKind;
  alt?: string;
  /** Poster frame for video assets. */
  poster?: string;
  /** When false the download is deferred until the caller re-enables it. */
  enabled?: boolean;
  className?: string;
  mediaClassName?: string;
}

/** "Media Loading (123KB)" — loadedKB is bytes / 1024, rounded. */
function formatLoadedKB(loadedBytes: number): string {
  return `Media Loading (${Math.round(loadedBytes / 1024)}KB)`;
}

/** Convert a watch/share YouTube URL into its embeddable form. */
function toYouTubeEmbed(src: string): string {
  try {
    const url = new URL(src);
    if (url.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${url.pathname.replace(/^\//, "")}`;
    }
    const id = url.searchParams.get("v");
    if (id) return `https://www.youtube.com/embed/${id}`;
    return src;
  } catch {
    return src;
  }
}

function MediaLoader({
  src,
  kind = "image",
  alt,
  poster,
  enabled = true,
  className,
  mediaClassName,
}: MediaLoaderProps) {
  const { state, loadedBytes, blobUrl } = useMediaLoader(src, { enabled });

  const mediaSrc = blobUrl ?? src;
  const mediaClass = cn(styles.media, mediaClassName);

  // YouTube streams directly — no byte progress to report, so render inline.
  if (kind === "youtube") {
    return (
      <div className={cn(styles.wrapper, className)}>
        <iframe
          src={src ? toYouTubeEmbed(src) : undefined}
          title={alt ?? "Embedded video"}
          className={mediaClass}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const isLoading = state === "loading";

  return (
    <div className={cn(styles.wrapper, className)}>
      {isLoading && (
        <div className={styles.loading} role="status" aria-live="polite">
          <span className={styles.loadingText}>{formatLoadedKB(loadedBytes)}</span>
        </div>
      )}

      {(state === "loaded" || state === "error") &&
        (kind === "video" ? (
          <video
            src={mediaSrc}
            poster={poster}
            controls
            preload="metadata"
            className={mediaClass}
          />
        ) : (
          <img src={mediaSrc} alt={alt ?? ""} className={mediaClass} />
        ))}
    </div>
  );
}

export default MediaLoader;
