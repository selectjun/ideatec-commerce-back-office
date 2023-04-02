import { PropsWithChildren } from "react";
import { useLayerActions } from "../../atoms/layerState";
import LayerFrameHeader from "../LayerFrameHeader";
import { Wrapper } from "./LayoutFrame.styled";

export interface LayerFrameProps {
  layoutKey: string;
  title?: string;
}

const LayerFrame: React.FC<PropsWithChildren<LayerFrameProps>> = ({
  children,
  layoutKey,
  title,
}) => {
  const { closeLayer, fixLayer } = useLayerActions();

  return (
    <Wrapper key={layoutKey}>
      <LayerFrameHeader
        title={title}
        layoutKey={layoutKey}
        onClose={closeLayer}
        onFixed={fixLayer}
      />
      {children}
    </Wrapper>
  );
};

export default LayerFrame;
