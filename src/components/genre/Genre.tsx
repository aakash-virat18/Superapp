import { useState } from "react";
import styles from "./Genre.module.css";
import action from "../../assets/images/image2.jpg";
import drama from "../../assets/images/image4.jpg";
import romance from "../../assets/images/image6.jpg";
import thriller from "../../assets/images/image7.png";
import western from "../../assets/images/image8.jpg";
import horror from "../../assets/images/image9.jpg";
import fantasy from "../../assets/images/image10.jpg";
import music from "../../assets/images/image11.jpg";
import fiction from "../../assets/images/image3.jpg";
import error from "../../assets/icons/error.svg";

const categories = [
  {
    name: "Action",
    color: "#FF5209",
    src: action,
  },
  {
    name: "Drama",
    color: "#D7A4FF",
    src: drama,
  },
  {
    name: "Romance",
    color: "#148A08",
    src: romance,
  },
  {
    name: "Thriller",
    color: "#84C2FF",
    src: thriller,
  },
  {
    name: "Western",
    color: "#902500",
    src: western,
  },
  {
    name: "Horror",
    color: "#7358FF",
    src: horror,
  },
  {
    name: "Fantasy",
    color: "#FF4ADE",
    src: fantasy,
  },
  {
    name: "Music",
    color: "#E61E32",
    src: music,
  },
  {
    name: "Fiction",
    color: "#6CD061",
    src: fiction,
  },
];

const Genre = () => {
  const [isSelected, setIsSelected] = useState<number[]>([]);

  const handleSelected = (idx: number) => {
    if (isSelected.includes(idx)) {
      const index = isSelected.indexOf(idx);
      const newArr = isSelected.filter((val, id) => {
        return id != index;
      });
      setIsSelected(newArr);
      return;
    }
    setIsSelected((prev) => [...prev, idx]);
  };

  const renderCategoryButtons = isSelected.map((index) => {
    return (
      <div className={styles.categoryButton} key={index}>
        {categories[index].name}
        <span className={styles.cross} onClick={() => handleSelected(index)}>
          X
        </span>
      </div>
    );
  });
  const renderedCategoryList = categories.map((category, idx) => {
    const flag = isSelected.includes(idx);
    return (
      <div
        style={{
          backgroundColor: category.color,
        }}
        className={`${styles.categoryItem} ${flag ? styles.border : ""}`}
        key={idx}
        onClick={() => handleSelected(idx)}
      >
        {category.name}
        <img src={category.src} className={styles.img} />
      </div>
    );
  });
  return (
    <div className={styles.genre}>
      <div className={styles.displayCategory}>
        <h2 className={styles.logo}>Super App</h2>
        <h1 className={styles.heading}>Choose your entertainment category</h1>
        <div className={styles.buttons}>{renderCategoryButtons}</div>
        {isSelected.length < 3 && (
          <div className={styles.error}>
            <img src={error} />
            Minimum 3 category required
          </div>
        )}
      </div>
      <div className={styles.category}>{renderedCategoryList}</div>
    </div>
  );
};

export default Genre;
