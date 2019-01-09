import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField, IWebPartContext } from "@microsoft/sp-webpart-base";
import { Provider } from "mobx-react";

import * as strings from "MobXpocWebPartStrings";
import MobXpoc from "./containers/MobXpoc";
import { IMobXpocProps } from "./containers/IMobXpocProps";
import * as store from "./store/store";

export interface IMobXpocWebPartProps {
  description: string;
}

export default class MobXpocWebPart extends BaseClientSideWebPart<IMobXpocWebPartProps> {
  public render(): void {
    if (this.renderedOnce) {
      return;
    }

    const element = (
      <Provider {...store.store}>
        <MobXpoc commonStore={store.store.commonStore} />
      </Provider>
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
