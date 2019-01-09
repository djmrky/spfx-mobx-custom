import * as React from "react";
import { IItemsProps } from "./IItemsProps";
import { ChangeEvent } from "react";
import { observer, inject } from "mobx-react";
import { ICommonStore } from "../store/commonStore";

export class Items extends React.Component<IItemsProps, {}> {
  public render(): React.ReactElement<IItemsProps> {
    let items = null;
    if (this.props.commonStore.items != null) {
      items = this.props.commonStore.items.map(item => {
        return <li key={item}>{item}</li>;
      });
    }
    return (
      <div>
        ITEMS:
        <input type="text" defaultValue={this.props.commonStore.currentItem} onChange={(e: ChangeEvent<HTMLInputElement>) => this.props.commonStore.onChangeCurrentItem(e.currentTarget.value)} />
        <ul>{items}</ul>
        <button type="button" onClick={this.onAddItem}>
          Add item
        </button>
      </div>
    );
  }

  onAddItem = () => {
    this.props.commonStore.onItemsAddItem();
  };

  onChangeCurrentItem = (value: string) => {
    debugger;
    this.props.commonStore.onChangeCurrentItem(value);
  };
}

export default inject(store => ({
  commonStore: store.commonStore as ICommonStore
}))(observer(Items));
