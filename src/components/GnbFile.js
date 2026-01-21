// src/components/GnbFile.jsx
import { useState } from "react";
import { useTabs } from "../context/tabsContext";

export default function GnbFile({ node, depth }) {
  const { openTab } = useTabs();
  const [open, setOpen] = useState(true);

  const isFolder = node.type === "folder";
  const paddingLeft = 12 + depth * 14;

  // 📁 폴더
  if (isFolder) {
    return (
      <div>
        <div
          className="gnb-item folder"
          style={{ paddingLeft }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="arrow">{open ? "▾" : "▸"}</span>
          <span className="name">{node.name}</span>
        </div>

        {open &&
          node.children?.map((child) => (
            <GnbFile
              key={child.id}
              node={child}
              depth={depth + 1}
            />
          ))}
      </div>
    );
  }

  // 📄 파일
  return (
    <div
      className="gnb-item file"
      style={{ paddingLeft }}
      onClick={() =>
        openTab({
          id: node.id,
          title: node.name,
          path: node.path,
        })
      }
    >
      <span className="name">{node.name}</span>
    </div>
  );
}
