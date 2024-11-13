"use client";

import { useContextElement } from "@/context/Context";

export default function WishlistLength() {
  const { wishList } = useContextElement();
  return <>{wishList.length}</>;
}
