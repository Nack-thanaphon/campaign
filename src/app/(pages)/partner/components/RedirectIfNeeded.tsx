"use client";

import { useEffect } from 'react';

const RedirectIfNeeded = ({ isReviewRedirect, reviewUrl }: { isReviewRedirect: boolean, reviewUrl: string }) => {
  useEffect(() => {
    if (isReviewRedirect) {
      window.location.href = reviewUrl;
    }
  }, [isReviewRedirect, reviewUrl]);

  return null;
};

export default RedirectIfNeeded;