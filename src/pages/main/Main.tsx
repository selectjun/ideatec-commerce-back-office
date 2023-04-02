import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Layer, useLayerActions, useLayerValue } from "../../atoms/layerState";
import Content from "../../components/Content";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { App } from "./Main.styled";

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const { layers } = useLayerValue();
  const { loadLayers, modifyLayers } = useLayerActions();

  useEffect(() => {
    loadLayers();
  }, [loadLayers]);

  return (
    <App>
      <Header />
      <Grid padded style={{ height: "100%" }}>
        <SideBar />
        <Content handleLayoutChange={modifyLayers}>
          {layers.map((layer: Layer) => {
            return <div key={layer.key}>{layer.node}</div>;
          })}
        </Content>
      </Grid>
    </App>
  );
};

export default Main;
