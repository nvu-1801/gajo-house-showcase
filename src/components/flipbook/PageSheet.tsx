import React from 'react';

interface PageSheetProps {
  density?: 'hard' | 'soft';
  isHardCover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const PageSheet: React.FC<PageSheetProps> = ({
  density = 'soft',
  isHardCover = false,
  className = '',
  children,
}) => {
  const classes = ['page-sheet', isHardCover ? 'hard-cover' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} data-density={density}>
      {children}
    </div>
  );
};
