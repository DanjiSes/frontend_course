import MainSidebar from "../../../blocks/main-sidebar/MainSidebar"

function BaseTemplate(props) {
  return (
    <div className="template-base">
      {/* Sidebar */}
      <MainSidebar />
      {/* Page content */}
      <div class="content">
        { props.children }
      </div>
    </div>
  )
}

export default BaseTemplate
