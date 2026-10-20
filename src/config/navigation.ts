type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
  icon?: unknown;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "story", path: "/story", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "dinosaurs", path: "/dinosaurs", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.key);
