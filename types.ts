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