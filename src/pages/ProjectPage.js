import { Outlet } from "react-router-dom";

function ProjectPage() {
  return (
    <section className="project-page">
      {/* 왼쪽/오른쪽 레이아웃은 나중에 */}
      <Outlet />
    </section>
  );
}

export default ProjectPage;
