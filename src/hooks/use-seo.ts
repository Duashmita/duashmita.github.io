import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description?: string;
  canonicalPath?: string;
};

function upsertMeta(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertOg(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>("link[rel=\"canonical\"]");
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, canonicalPath }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      upsertMeta("description", description);
      upsertOg("og:description", description);
    }

    upsertOg("og:title", title);

    if (canonicalPath) {
      const normalized = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
      // HashRouter canonical (avoid tokenized query params)
      upsertCanonical(`${window.location.origin}/#${normalized}`);
    }
  }, [title, description, canonicalPath]);
}
