import { useRefContext } from "../context/useRef";

const ContactPage = () => {
  const { contactRef } = useRefContext();
  return <div ref={contactRef}></div>;
};

export default ContactPage;
