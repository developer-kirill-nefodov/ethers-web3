import {AxiosInstance} from "axios";
import {BrowserProvider} from "ethers";
import {FunctionComponent, SVGAttributes} from "react";

declare global {
  interface Window {
    axios: AxiosInstance;
    ethereum?: BrowserProvider;
  }
}

declare module "*.svg" {
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
