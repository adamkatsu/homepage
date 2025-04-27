export default function WorksCard({title, year, description, image, link}) {
  return (
    <a target="_blank" className="works-grid_item" href={link}>
      <div className="works-grid_item-bg"></div>
      <div className="works-grid_item-wrapper">
        <img src={image} alt=""/>
        <div className="works-card">
          <div className="works-card_title">
            <h3>{title}</h3>
            <span className="year">{year}</span>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </a>
  )
}