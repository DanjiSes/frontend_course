
function BaseTemplate(props) {
  return (
    <div className="template-base">
      {/* Sidebar */}
      <MainSidebar />
      {/* Page content */}
      <div class="template-base__content">
        { props.children }
      </div>
    </div>
  )
}
