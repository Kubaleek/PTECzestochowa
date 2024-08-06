interface Twttr {
  widgets: {
    load(element?: HTMLElement): void;
  };
}

interface Window {
  twttr?: Twttr;
}
