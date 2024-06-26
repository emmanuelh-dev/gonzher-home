import { ReactNode } from "react";
import { formatDate } from "pliny/utils/formatDate.js";
import { CoreContent } from "pliny/utils/contentlayer.js";
import type { Page } from "contentlayer/generated";
import Comments from "@/components/Comments";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";

interface LayoutProps {
  content: CoreContent<Page>;
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function PostLayout({
  content,
  next,
  prev,
  children,
}: LayoutProps) {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0">
        <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10">{children}</div>
        </div>
      </div>
    </SectionContainer>
  );
}
