import {AxiosInstance} from "axios";
import {BrowserProvider} from "ethers";

declare global {
  interface Window {
    axios: AxiosInstance;
    ethereum?: BrowserProvider;
  }

  declare module "*.svg" {
    import {FunctionComponent, SVGProps} from "react";

    export const ReactComponent: FunctionComponent<SVGProps<
      SVGSVGElement
    > & { style?: Object, className?: string }>;

    const src: string;
    export default src;
  }

  declare module "*.png" {
    const content: any;
    export default content;
  }
}


