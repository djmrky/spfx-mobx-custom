import * as cs from "./commonStore";

export interface IStore {
  commonStore: cs.ICommonStore;
}

export class Store implements IStore {
  commonStore: cs.CommonStore = cs.commonStore;
}
