"use client";

import { useState } from "react";

function ShowMore({ description, title }: { description: string; title: string }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {showMore && <p className="text-neutral-100">{description}</p>}
      <button title={`Ver mas ${title}`} className="py-2 font-medium text-base text-white/80 hover:text-white" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Ver menos" : "Ver Más"}
      </button>
    </>
  );
}
export default ShowMore;
