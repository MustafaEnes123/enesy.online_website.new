import React from 'react';

export interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}