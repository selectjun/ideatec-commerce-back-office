import { useCallback } from "react";
import { Button } from "semantic-ui-react";
import { Title, Wrapper } from "./LayerFrameHeader.styled";

export interface LayerFrameHeaderProps {
  title?: string;
  layoutKey: string;
  onFixed?: (key: string) => void;
  onMinimization?: () => void;
  onClose?: (key: string) => void;
}

const LayerFrameHeader: React.FC<LayerFrameHeaderProps> = ({
  title = "",
  layoutKey,
  onFixed,
  onMinimization,
  onClose,
}) => {
  const handleFixed = useCallback(
    () => onFixed && onFixed(layoutKey),
    [onFixed, layoutKey]
  );

  const handleMinimization = useCallback(
    () => onMinimization && onMinimization(),
    [onMinimization]
  );

  const handleClose = useCallback(
    () => onClose && onClose(layoutKey),
    [onClose, layoutKey]
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        {onFixed ? <Button onClick={handleFixed}>고정</Button> : null}
        {onMinimization ? (
          <Button onClick={handleMinimization}>최소화</Button>
        ) : null}
        {onClose ? <Button onClick={handleClose}>닫기</Button> : null}
      </div>
    </Wrapper>
  );
};

export default LayerFrameHeader;
