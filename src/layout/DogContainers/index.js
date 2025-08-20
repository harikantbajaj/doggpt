import classNames from "classnames/bind";
import styles from "./DogContainers.module.scss";
import bhowSound from "../../sound/sound.mp3";
import { useEffect, useMemo, useState } from "react";
import useTyping from "../../context/TypingContext/hooks";
import dogPic from "../../img/dog.png";

function DogContainers(props) {
  const [newDogMS, setNewDogMS] = useState([]);
  const { setIsTyping } = useTyping();
  const cx = classNames.bind(styles);
  const audio = new Audio(bhowSound);
  const times = useMemo(() => {
    return Math.floor(Math.random() * 10) + 1;
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (newDogMS.length < times) {
        setNewDogMS((prev) => [...prev, " bhow wow oow"]);
        audio.play();
      } else if (newDogMS.length === times) {
        setNewDogMS((prev) => [...prev, "."]);
        setIsTyping(false);
      }
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line
  }, [newDogMS]);

  return (
    <div className={cx("dog")}>
      <div className={cx("mescontainer")}>
        <img src={dogPic} alt={"dog"} className={cx("avata")} />
        <p className={cx("message")}>{props.message || newDogMS.join("")}</p>
      </div>
    </div>
  );
}
export default DogContainers;
