import React, { ComponentPropsWithoutRef } from 'react';

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type AsProp<TAs extends React.ElementType> = {
  as?: TAs;
};

type PropsToOmit<TAs extends React.ElementType, TComp> = keyof (AsProp<TAs> &
  TComp);

export type PolymorphicComponentProps<
  TAs extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<AsProp<TAs> & Props> &
  Omit<ComponentPropsWithoutRef<TAs>, PropsToOmit<TAs, Props>>;
