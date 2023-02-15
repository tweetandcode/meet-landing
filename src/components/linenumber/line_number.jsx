import styles from "./line_number.module.css";
export default function LineNumber(props) {
  return (
    <div className={styles.main}>
      <div className={styles.line}></div>
      <div className={styles.number}>
        {props.children}
      </div>
    </div>
  )
}