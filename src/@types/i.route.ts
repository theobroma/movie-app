// import { ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
  // layout: ComponentType;
  routes?: IRoute[];
}
