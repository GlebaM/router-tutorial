import { CSSTransition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transformOrigin: "50% 0%",
  opacity: 0,
  transform: "scale(0)",
};

const transitionStyles = {
  entering: { opacity: 0, transform: "scale(0)" },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: { opacity: 1, transform: "scale(1)" },
  exited: { opacity: 0, transform: "scale(0)" },
};

const Fade = ({ in: inProp, children }) => (
  <CSSTransition in={inProp} timeout={duration} appear>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </CSSTransition>
);

export default Fade;
