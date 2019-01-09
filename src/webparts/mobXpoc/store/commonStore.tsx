import { observable } from "mobx";

export interface ICommonStore {
  name: string;
  items: any[];
  currentItem: string;
  onChangeName(): void;
  onItemsAddItem(): void;
  onChangeCurrentItem(item: string): void;
}

export class CommonStore implements ICommonStore {
  constructor() {
    this.name = "Dusan";
    this.items = [];
  }
  @observable name: string;
  @observable items: any[];
  @observable currentItem: string;

  onChangeName() {
    this.name = "Dusan CHANGED " + new Date().toISOString();
  }

  onItemsAddItem() {
    this.items.push(this.currentItem);
  }

  onChangeCurrentItem(item: string): void {
    this.currentItem = item;
  }
}

export let commonStore = new CommonStore();
