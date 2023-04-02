import React from "react";
import { useMemo } from "react";
import { Layout } from "react-grid-layout";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuid } from "uuid";
import Analytics from "../layers/Analytics";
import AnotherNavItem from "../layers/AnotherNavItem";
import Export from "../layers/Export";
import Linux from "../layers/Linux";
import Macintoch from "../layers/Macintoch";
import MoreNavigation from "../layers/MoreNavigation";
import NavItem from "../layers/NavItem";
import NavItemAgain from "../layers/NavItemAgain";
import OneMoreNav from "../layers/OneMoreNav";
import Overview from "../layers/Overview";
import Reports from "../layers/Reports";
import Windows from "../layers/Windows";

export type LayerType =
  | "analytics"
  | "another_nav_item"
  | "export"
  | "linux"
  | "macintoch"
  | "more_navigation"
  | "nav_item"
  | "nav_item_again"
  | "one_more_nav"
  | "overview"
  | "reports"
  | "windows";

export interface Layer {
  key: string;
  type: LayerType;
  node: React.ReactNode;
  layout: Layout;
  minimization: boolean;
}

export interface LayerState {
  layers: Layer[];
}

const initialState: LayerState = {
  layers: [],
};

const layerState = atom<LayerState>({
  default: initialState,
  key: "layerState",
});

export const useLayerValue = () => useRecoilValue<LayerState>(layerState);

export const useLayerActions = () => {
  const set = useSetRecoilState(layerState);
  return useMemo(
    () => ({
      loadLayers: () => {
        try {
          const layersString = localStorage.getItem("layers");

          let layers: Layer[] = [];
          if (layersString) layers = JSON.parse(layersString).layers;

          set((prev) => {
            const next = {
              ...prev,
              layers,
            };
            return next;
          });
        } catch (e) {
          console.log(e);
        }
      },
      addLayer: (type: LayerType) => {
        set((prev) => {
          const key = uuid();

          let node: React.ReactNode = null;
          if (type === "analytics") {
            node = React.createElement(Analytics, {
              layoutKey: key,
              title: "Analytics",
            });
          } else if (type === "another_nav_item") {
            node = React.createElement(AnotherNavItem, {
              layoutKey: key,
              title: "Another nav item",
            });
          } else if (type === "export") {
            node = React.createElement(Export, {
              layoutKey: key,
              title: "Export",
            });
          } else if (type === "linux") {
            node = React.createElement(Linux, {
              layoutKey: key,
              title: "Linux",
            });
          } else if (type === "macintoch") {
            node = React.createElement(Macintoch, {
              layoutKey: key,
              title: "Macintoch",
            });
          } else if (type === "more_navigation") {
            node = React.createElement(MoreNavigation, {
              layoutKey: key,
              title: "More navigation",
            });
          } else if (type === "nav_item") {
            node = React.createElement(NavItem, {
              layoutKey: key,
              title: "Nav item",
            });
          } else if (type === "nav_item_again") {
            node = React.createElement(NavItemAgain, {
              layoutKey: key,
              title: "Nav item again",
            });
          } else if (type === "one_more_nav") {
            node = React.createElement(OneMoreNav, {
              layoutKey: key,
              title: "One more nav",
            });
          } else if (type === "overview") {
            node = React.createElement(Overview, {
              layoutKey: key,
              title: "Overview",
            });
          } else if (type === "reports") {
            node = React.createElement(Reports, {
              layoutKey: key,
              title: "Reports",
            });
          } else if (type === "windows") {
            node = React.createElement(Windows, {
              layoutKey: key,
              title: "Windows",
            });
          }

          const next = {
            ...prev,
            layers: [
              ...prev.layers,
              {
                key,
                type,
                node,
                layout: { i: key, x: 0, y: 0, w: 8, h: 6 },
                minimization: false,
              },
            ],
          };

          const nextToString = JSON.stringify(next);
          // localStorage.setItem("layers", nextToString);

          return next;
        });
      },
      modifyLayers: (layouts: Layout[]) => {
        set((prev) => {
          const next = {
            ...prev,
            layers: prev.layers.map((layer) => {
              const layout = layouts.find((layout) => layer.key === layout.i);

              return layout
                ? {
                    ...layer,
                    layout,
                  }
                : layer;
            }),
          };
          return next;
        });
      },
      closeLayer: (key: string) => {
        set((prev) => {
          const next = {
            ...prev,
            layers: prev.layers.filter((layer) => layer.key !== key),
          };
          return next;
        });
      },
      fixLayer: (key: string) => {
        set((prev) => {
          const next = {
            ...prev,
            layers: prev.layers.map((layer) =>
              layer.key === key
                ? {
                    ...layer,
                    layout: {
                      ...layer.layout,
                      static: !layer.layout.static,
                    },
                  }
                : layer
            ),
          };
          return next;
        });
      },
    }),
    [set]
  );
};
