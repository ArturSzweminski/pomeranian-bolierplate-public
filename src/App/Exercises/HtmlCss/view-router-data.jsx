import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { TextFundamentsMetaData } from './TextFundaments/router-data';
// import { SelectorAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  // SelectorAndCascadeRouterMetaData,
  TextFundamentsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
