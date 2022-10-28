
export const CardApp = ({ children, title, subTitle }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-4 text-muted"> <b>{subTitle}</b></h6>
        {children}
      </div>
    </div>
  )
}
