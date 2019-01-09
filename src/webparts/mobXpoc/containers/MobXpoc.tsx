import * as React from "react";
import styles from "./MobXpoc.module.scss";
import { IMobXpocProps } from "./IMobXpocProps";
import { escape } from "@microsoft/sp-lodash-subset";

import { observer, inject } from "mobx-react";

import { Items } from "../components/Items";

//interfaces
import { ICommonStore } from "../store/commonStore";
import { store } from "../store/store";

export class MobXpoc extends React.Component<IMobXpocProps, {}> {
  public render(): React.ReactElement<IMobXpocProps> {
    return (
      <div className={styles.mobXpoc}>
        Hello Mobx and {this.props.commonStore.name}
        <button type="button" onClick={this.onChangeName}>
          Change name
        </button>
        <Items commonStore={this.props.commonStore} />
      </div>
    );
  }

  onChangeName = () => {
    this.props.commonStore.onChangeName();
  };
}

export default inject(store => ({
  commonStore: store.commonStore as ICommonStore
}))(observer(MobXpoc));
