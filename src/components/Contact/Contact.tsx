import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import telegramIcon from "../../assets/telegram.png";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>
          If you have seen my potential or want to talk to me, feel free to send
          me a message
        </p>
      </header>
      <div className="contacts">
        <a
          className="link-tag"
          target="_blank"
          href="mailto:ahatkulov98@gmail.com"
          rel="noreferrer"
        >
          <div>
            <img src={emailIcon} alt="Email" />
            <span>ahatkulov98@gmail.com</span>
          </div>
        </a>
        <a
          className="link-tag"
          target="_blank"
          href="tel:+998930085504"
          rel="noreferrer"
        >
          <div>
            <img src={phoneIcon} alt="Email" />
            <span>(99) 037-28-06</span>
          </div>
        </a>

        <a
          className="link-tag"
          target="_blank"
          href="https://t.me/ibrohim_ahatkulov"
          rel="noreferrer"
        >
          <div>
            <img src={telegramIcon} alt="Email" />
            <span>Ibrohim Ahatkulov</span>
          </div>
        </a>
      </div>
    </Container>
  );
}
