export interface ICommonStore {
  name: string;
}

export class CommonStore implements ICommonStore {
  constructor() {
    this.name = "Dusan";
  }
  name: string;
}

export let commonStore = new CommonStore();
