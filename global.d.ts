declare module "*.png" {
  const id: number;
  export default id;
}

declare module "*.jpg" {
  const id: number;
  export default id;
}

type SVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string; onPress?: () => void }
>;

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: SVGComponent;
  export default ReactComponent;
}
