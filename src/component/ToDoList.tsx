import image from "../assets/react.svg";

interface ToDoItem {
  title: string;
  image?: string;
  description: string;
}

interface Props {
    onClick: (toDoItem: string) => void
}

function ToDoList({onClick}: Props) {
  const toDoList: ToDoItem[] = [
    {
      title: "Do laundry",
      image: image,
      description: "Haizz",
    },
    {
      title: "Mop floor",
      image: image,
      description: "Lazy Mop",
    },
    {
      title: "Buy groceries",
      image: image,
      description: "No money",
    },
    {
      title: "Play game",
      image: image,
      description: "Play Dota",
    },
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {toDoList.map(({ title, image, description }) => (
          <div className="col">
            <div className="card h-100">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary" onClick={() => {
                    onClick(title)
                }}>Done</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoList;
