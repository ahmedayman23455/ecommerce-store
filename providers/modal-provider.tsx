"use client";

import React, { useState, useEffect } from "react";

import PerviewModal from "@/components/perview-model";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState<Boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PerviewModal />
    </>
  );
}

export default ModalProvider;
