import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField, IWebPartContext } from "@microsoft/sp-webpart-base";
//import { Provider } from "mobx-react";

import * as strings from "MobXpocWebPartStrings";
import MobXpoc from "./containers/MobXpoc";
import { IMobXpocProps } from "./containers/IMobXpocProps";
//import Store from "./store";

export interface IMobXpocWebPartProps {
  description: string;
}

export default class MobXpocWebPart extends BaseClientSideWebPart<IMobXpocWebPartProps> {
  //private store = new Store();

  // constructor(context: IWebPartContext) {
  //   super(context);
  // }
  public render(): void {
    const element: React.ReactElement<IMobXpocProps> = React.createElement(MobXpoc, {
      description: this.properties.description
    });

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
