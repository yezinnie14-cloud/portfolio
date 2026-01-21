import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTabs } from "../context/tabsContext";

export default function GnbFile({ node, depth = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { openTab, setActive } = useTabs();

  const isFolder = node.type === "folder";
  const [open, setOpen] = useState(true);

  // 들여쓰기
  const paddingLeft = 12 + depth * 14;

  // 현재 페이지 경로와 같으면 active(파일일 때만)
  const isActiveFile = !isFolder && node.path === location.pathname;

  // 📁 폴더 클릭: 열고/닫기
  const handleFolderClick = () => {
    setOpen((prev) => !prev);
  };

  // 📄 파일 클릭: 탭 열기 + 이동 + active 설정
  const handleFileClick = () => {
    openTab({
      id: node.id,       // JSON에 있는 id
      title: node.name,  // 탭 타이틀은 파일명 그대로
      path: node.path,   // 라우트 경로
    });

    // 탭 active 갱신 (tabsContext에 setActive가 있다면)
    if (typeof setActive === "function") {
      setActive(node.id);
    }

    // 화면 이동
    navigate(node.path);
  };

  // 폴더 렌더
  if (isFolder) {
    return (
      <div className="gnb-node">
        <div
          className="gnb-item folder"
          style={{ paddingLeft }}
          onClick={handleFolderClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleFolderClick()}
        >
          <span className="arrow">{open ? "▾" : "▸"}</span>
          <span className="name">{node.name}</span>
        </div>

        {open &&
          node.children?.map((child) => (
            <GnbFile key={child.id} node={child} depth={depth + 1} />
          ))}
      </div>
    );
  }

  // 파일 렌더
  return (
    <div
      className={`gnb-item file ${isActiveFile ? "active" : ""}`}
      style={{ paddingLeft }}
      onClick={handleFileClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleFileClick()}
    >
      <span className="name">{node.name}</span>
    </div>
  );
}
