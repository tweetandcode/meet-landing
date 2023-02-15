import styles from "./user_image.module.css";
export default function LineNumber() {
  return (
    <div className={styles.main}>
      <img src="/assets/desktop/image-woman-in-videocall.jpg" alt="woman in video call" />
      <img src="/assets/desktop/image-women-videochatting.jpg" alt="women video chatting" />
      <img src="/assets/desktop/image-men-in-meeting.jpg" alt="men in meeting" />
      <img src="/assets/desktop/image-man-texting.jpg" alt="man texting" />
    </div>
  )
}