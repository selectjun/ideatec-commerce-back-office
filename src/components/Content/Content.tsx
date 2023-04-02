import { PropsWithChildren, useCallback, useMemo } from "react";
import ReactGridLayout, { Layout } from "react-grid-layout";
import { Grid } from "semantic-ui-react";
import { useLayerValue } from "../../atoms/layerState";

export interface ContentProps {
  handleLayoutChange?: (layout: Layout[]) => void;
}

const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  children,
  handleLayoutChange,
}) => {
  const { layers } = useLayerValue();
  const layout = useMemo(() => layers.map((layer) => layer.layout), [layers]);
  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  // ];

  const onLayoutChange = useCallback(
    (layout: Layout[]) => handleLayoutChange && handleLayoutChange(layout),
    [handleLayoutChange]
  );

  const onResize = useCallback(
    (
      layout: Layout[],
      oldLayoutItem: Layout,
      layoutItem: Layout,
      placeholder: Layout,
      event: MouseEvent,
      element: HTMLElement
    ) => {
      if (layoutItem.h < 3 && layoutItem.w > 2) {
        layoutItem.w = 2;
        placeholder.w = 2;
      }

      if (layoutItem.h >= 3 && layoutItem.w < 2) {
        layoutItem.w = 2;
        placeholder.w = 2;
      }
    },
    []
  );

  return (
    <Grid.Column
      mobile={16}
      tablet={13}
      computer={13}
      floated="right"
      id="content"
    >
      <Grid padded style={{ height: "100%" }}>
        <Grid.Row>
          <ReactGridLayout
            className="layout"
            layout={layout}
            cols={24}
            rowHeight={30}
            width={1200}
            onLayoutChange={onLayoutChange}
            onResize={onResize}
            style={{ height: "100%" }}
          >
            {children}
          </ReactGridLayout>
        </Grid.Row>
      </Grid>
    </Grid.Column>
  );
};

export default Content;
