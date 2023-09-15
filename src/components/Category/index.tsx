import "./style.css";
export interface ICategoryProps {
  img: string;
  title: string;
}

export default function Category(props: ICategoryProps) {
  return (
    <div className="category-content">
      <div className="category-card" style={{ position: "relative" }}>
        <div
          className="svg-container"
          dangerouslySetInnerHTML={{ __html: props.img }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <p id="category-name">{props.title}</p>
    </div>
  );
}
