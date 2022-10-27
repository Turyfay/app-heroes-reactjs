
export const CardApp = ({children,title,subTitle}) => {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
        {children}
    </div>
  </div>
  )
}
