import { ComponentType } from 'react';

export interface IRoute {
  component?: ComponentType;
  // computedMatch?: any;
  exact?: boolean;
  // getReducers?: any;
  // icon?: ComponentType | any;
  layout?: ComponentType;
  path: string;
  redirect?: string;
  // routes?: IRoute[];
  // title?: string;
}
