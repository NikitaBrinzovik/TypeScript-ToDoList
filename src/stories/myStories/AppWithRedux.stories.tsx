import React from "react";
import AppWithRedux from "../../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";


export default {
    title: "AppWithRedux Component",
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}

//не контролируемая
export const EditableSpanBaseExample = () => {
    return <AppWithRedux/>

}